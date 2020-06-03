FROM nginx:1.13.9-alpine

RUN mkdir -p /usr/share/media

COPY ./dist/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
