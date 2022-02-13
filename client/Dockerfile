# Dockerfile for React client

# Build react client
FROM node:16-alpine3.14 as build
#Hay que poner todas las variables en está parte que coincidan con el docker compose
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL $REACT_APP_API_URL
# Working directory be app
FROM build as dev
WORKDIR /app
COPY package*.json ./

###  Installing dependencies

RUN npm i --silent

###  ENV VARS FOR WEBPACK


# copy local files to app folder
COPY . .

#EXPOSE 3000

CMD ["npm","start"]