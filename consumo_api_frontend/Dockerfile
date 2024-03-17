# Estágio de compilação
FROM node:latest as build-stage

# Define o diretório de trabalho dentro do contêiner
WORKDIR /usr/app/consumo_api_frontend

# Copia os arquivos de dependências (package.json e yarn.lock, se existirem) para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia todo o código-fonte para o diretório de trabalho
COPY . .

# Expõe a porta em que o servidor Node.js estará em execução
EXPOSE 5173

# Adiciona o parâmetro --host 0.0.0.0 para permitir o acesso externo ao servidor Vite
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
