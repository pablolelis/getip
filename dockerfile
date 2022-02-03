# Comando obrigatório
## Baixa a imagem do node com versão alpine (versão mais simplificada e leve)
FROM node:alpine

## Define o local onde o app vai ficar no disco do container
## Pode ser o diretório que você quiser
WORKDIR /usr/getip

# Install dependencies required to git clone.
RUN apk update && \
    apk add --update git && \
    apk add --update openssh
    
RUN ayum install nano


# Clone a repository (my website in this case)
RUN git clone https://github.com/pablolelis/getip.git


## Copia tudo que está no diretório onde o arquivo Dockerfile está 
## para dentro da pasta /usr/app do container
## Vamos ignorar a node_modules por isso criaremos um .dockerignore
COPY . .

## Executa npm install para adicionar as dependências e criar a pasta node_modules
RUN npm install

## Copia tudo que está no diretório onde o arquivo Dockerfile está 
## para dentro da pasta /usr/app do container
## Vamos ignorar a node_modules por isso criaremos um .dockerignore
COPY . .

## Container ficará ouvindo os acessos na porta 3000
EXPOSE 8080

## Não se repete no Dockerfile
## Executa o comando npm start para iniciar o script que que está no package.json
CMD npm start
