FROM nginx:latest

WORKDIR /etc/nginx/

RUN rm /etc/nginx/conf.d/*

RUN mkdir /usr/share/nginx/html/petclinic

COPY ./angular.conf ./conf.d/

COPY ./dist /usr/share/nginx/html/petclinic/