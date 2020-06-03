FROM node:10.16.3 AS build-env

WORKDIR /app

COPY package.json ./
RUN npm install

COPY . ./

RUN npm run build

FROM nginx:1.13.9-alpine

COPY ./dist/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
