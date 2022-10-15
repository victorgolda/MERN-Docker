FROM node:16-alpine3.14 as build
RUN mkdir -p /usr/src/app
RUN apk add g++ make py3-pip nano

# ARG NODE_ENV=development

# Create App Directory
FROM build AS dev
WORKDIR /usr/src/app

# Install Dependencies
COPY package*.json ./
RUN npm install nodemon -g
RUN yarn install

# Copy app source code
COPY . .

# Exports
#EXPOSE 8080:8080
#EXPOSE 9229:9229

CMD [ "npm", "run", "start-dev" ]