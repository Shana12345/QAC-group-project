#!/bin/bash

git clone https://github.com/Finn969/QAC-group-project.git project-folder
cd project-folder
git pull
kubectl apply -f kubernetes
sleep 10s
kubectl get svc