FROM node:10.24.1-alpine3.11 AS build-env

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY src ./src
COPY angular.json tsconfig.json ./

RUN npm run build

FROM nginx:1.13.9-alpine

COPY ./dist/ /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
