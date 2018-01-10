FROM node:alpine

RUN mkdir /app
WORKDIR /app
COPY . /app

VOLUME /app
EXPOSE 8080

CMD npm install && npm run dev