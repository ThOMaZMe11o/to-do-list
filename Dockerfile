# Etapa 1: Construir a aplicação
FROM node:18 AS build

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos de package.json e package-lock.json para instalar as dependências
COPY package.json package-lock.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Construir a aplicação React para produção
RUN npm run build

# Etapa 2: Configurar o servidor para servir a aplicação
FROM nginx:alpine

# Copiar o conteúdo da pasta build para o diretório do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expor a porta 80 para acessar a aplicação no container
EXPOSE 80

# Iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
