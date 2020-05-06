#!/bin/bash

#git clone https://github.com/Finn969/QAC-group-project.git project-folder
#cd project-folder
#git pull


cd kubernetes
cp config ~/.kube

sudo su jenkins
cd ~
aws eks --region eu-west-3 update-kubeconfig --name terraform-eks-group-project


