#!/bin/bash


rm -r jenkins/build/*.jar


echo "***************************"
echo "*******Build jar***********"

jenkins/build/mvn.sh mvn -B -DskipTests package

cp java-app/target/*.jar jenkins/build/

cd jenkins/build && docker-compose -f docker-compose-build.yml up
