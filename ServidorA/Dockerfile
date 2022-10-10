# Imagem que vamos usar de base
FROM node 
# Informar o diretótio padrão
WORKDIR /
# Variaveis de ambiente durante o build do Dockerfile
ARG PORT=3000 
# Variavel de ambiente da aplicação
ENV PORT=$PORT
# Deixar a porta da máquina visivel
EXPOSE $PORT
# Copiar arquivos de dentro terminal para a imagem que estamos criando
COPY ./ .
# Rodar antes da aplicação | Comando em bash para pré iniciar a aplicação
RUN  npm install 
# Iniciar a aplicação
ENTRYPOINT npm start