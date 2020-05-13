#!/bin/bash

echo "***************************"
echo "*******Build jar***********"
echo "***************************"


jenkins/build/mvn.sh mvn -B -DskipTests package

cp java-app/target/*.jar jenkins/build/

cd jenkins/build && docker-compose -f docker-compose-build.yml up
