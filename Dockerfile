# FROM nginx:latest
# RUN mkdir -p /usr/share/nginx/html/petclinic/dist
# COPY ./frontend/dist  /usr/share/nginx/html/petclinic/dist/
# COPY ./frontend/angular.conf /etc/nginx/conf.d
# RUN rm /etc/nginx/conf.d/default.conf