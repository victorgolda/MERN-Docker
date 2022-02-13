# MERN Boilerplate

# `Instrucciones`

1.- Crear un archivo de variables en la carpeta raíz: .env
2.- Modificar el archivo init-mongo.js donde coincidan las variables de entorno (.env) con las variables del archivo js.

### `Variables de Entorno`

React se ejecuta en el navegador. Primero construye un "Bundle" desde webpack hardcodeando todas las variables de entorno.
https://stackoverflow.com/questions/55171870/changing-axios-baseurl-accessible-from-env-file-after-building-react-app

### `ENV File`

MONGO_INITDB_ROOT_USERNAME=
MONGO_INITDB_ROOT_PASSWORD=
MONGO_INITDB_DATABASE=
MONGO_HOSTNAME=
MONGO_USER=
MONGO_PASSWORD=
MONGO_PORT=
SERVER_PORT=
SERVER_HOST=
SERVER_REQUIRES_PROXY=
SERVER_HTTP_PROXY=
CLIENT_PORT=
CLIENT_HOST=
APP_NAME=

### `Explicación ENV File`

- MONGO_INITDB_ROOT_USERNAME : Usuario Root de la base datos de Mongo
- MONGO_INITDB_ROOT_PASSWORD : Contraseña Root de la base datos de Mongo
- MONGO_INITDB_DATABASE: Base de datos de la aplicación
- MONGO_HOSTNAME: Host de la Base de datos. Para Docker es el nombre del contendedor si no, ip del servidor de la base de datos
- MONGO_USER: Usuario de Mongo de la aplicación
- MONGO_PASSWORD: Password del Usuario de Mongo de la aplicación
- MONGO_PORT: Puerto de Mongo
- SERVER_PORT: Puerto del servidor API (Express). Usar el puerto externo debido a que en React es el navegador del usuario el que hace la petición, no el contenedor.
- SERVER_HOST: Host del servidor API (Express). Usar localhost debido a que en React es el navegador del usuario el que hace la petición, no el contenedor.
- SERVER_REQUIRES_PROXY: 1 / 0 para habilitar el proxy en las peticiones hacia trello
- SERVER_HTTP_PROXY: Servidor de Proxy para peticiones hacia trello
- CLIENT_PORT: Puerto del cliente (React). Para docker es el puerto interno si no, el externo.
- CLIENT_HOST= Host del cliente (React). Para docker es el nombre del contenedor.
- APP_NAME= Nombre de la aplicación para referencia en los nombre de los contenedores

### `Inicio`

Desarrollo:

- docker-compose -f docker-compose.yml -f docker-compose-dev.yml build
- docker-compose -f docker-compose.yml -f docker-compose-dev.yml up
- docker-compose -f docker-compose.yml -f docker-compose-dev.yml push

### `Nueva dependencia NPM`

1.- Ingresar al contenedor y ejecutar npm i <paquete>

### `Clean Docker Cache`

docker builder prune

### `Utilizar como boilerplate`

1.- Las variables de entorno de la base de datos deben coincidir con el archivo init de la carpeta database/scripts
