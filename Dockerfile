FROM node:22.22.0-alpine3.23 AS build-env

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY src ./src
COPY angular.json tsconfig.json .postcssrc.json  ./

RUN npm run build

FROM nginx:stable-alpine3.23

COPY --from=build-env /app/dist/browser /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
