#!/bin/bash

rm -rf project-folder
git clone https://github.com/Finn969/QAC-group-project.git project-folder
git checkout Finn # TEMPORARY USE ONLY! CHANGE BACK WHEN MERGED!
cd project-folder
cd backend
mvn test