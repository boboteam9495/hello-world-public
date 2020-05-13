#!/bin/bash

echo "***************************"
echo "*******Build jar***********"
echo "***************************"


WORKSPACE=/home/jenkins/jenkins-data/jenkins_home/workspace/pipeline-docker-maven
$WORKSPACE/jenkins/build/mvn.sh mvn -B -DskipTests package

cp $WORKSPACE/java-app/target/*.jar jenkins/build/

cd jenkins/build && docker-compose -f docker-compose-build.yml up
