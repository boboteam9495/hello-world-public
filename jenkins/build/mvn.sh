#!/bin/bash

WORKSPACE=/home/jenkins/jenkins-data/jenkins_home/workspace/pipeline-docker-maven

docker run -v $WORKSPACE/java-app:/app -v $HOME/.m2:/root/.m2 -v $PWD/java-app/target:/usr/src/mymaven/target -w /app maven:3-alpine "$@"
