FROM nginx:latest

WORKDIR /etc/nginx/

RUN rm /etc/nginx/conf.d/*

RUN mkdir /usr/share/nginx/html/petclinic

COPY ./angular.conf ./conf.d/

COPY ./dist /usr/share/nginx/html/petclinic/

RUN sudo apt install openjdk-8-jdk

COPY /home/ubuntu/sd/QAC-group-project/backend/target/spring-petclinic-rest-2.2.5.jar /usr/share/nginx/html/backend/

RUN mvn spring-boot:run

RUN java -jar /usr/share/nginx/html/backend/spring-petclinic-rest-2.2.5.jar