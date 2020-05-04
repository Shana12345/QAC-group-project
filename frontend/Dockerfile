FROM node:lts-buster
# Setting up the environment
RUN npm install -g @angular/cli@latest
WORKDIR /opt
RUN git clone https://github.com/spring-petclinic/spring-petclinic-angular.git
WORKDIR /opt/spring-petclinic-angular
RUN npm install --save-dev @angular/cli@latest
RUN npm install
RUN rm package-lock.json
CMD ng serve --host 0.0.0.0 --port 4200 --disableHostCheck true