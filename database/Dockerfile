# Set the base image to Ubuntu
FROM mongo as dev
#COPY scripts/init-mongo.sh /docker-entrypoint-initdb.d/
#https://shantanoo-desai.github.io/posts/technology/seeding-mongodb-docker-compose/
COPY scripts/init-mongo-var-copy.js /docker-entrypoint-initdb.d/
RUN mkdir -p /data/db
RUN mkdir -p /home/mongodb/
RUN touch ./home/mongodb/.dbshell
RUN chown -R 999:999 ./home/mongodb
CMD ["mongod", "--bind_ip_all"]