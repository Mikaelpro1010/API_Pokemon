# Use a imagem oficial do Node.js como base
FROM node:latest

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/app/consumo_api_backend

# Copia os arquivos de dependências (package.json e package-lock.json, se existirem) para o diretório de trabalho
COPY package*.json ./


# Instala as dependências
RUN npm install

# Copia todo o código-fonte para o diretório de trabalho
COPY . .

# Expõe a porta em que o servidor Node.js estará em execução
EXPOSE 5000

# Comando para iniciar o servidor Node.js
CMD ["npm","run","dev"]
