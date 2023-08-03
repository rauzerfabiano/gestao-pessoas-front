FROM node:14

WORKDIR /app

# Instalando as dependências
COPY package*.json ./
RUN npm install

# Copiand o código do projeto
COPY . .

# Build
RUN npm run build

# Instalando o servidor http
RUN npm install -g http-server

# Iniciando o servidor
CMD ["http-server", "dist"]

EXPOSE 8080