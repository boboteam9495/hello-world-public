#!/bin/bash

docker run -v $PWD/java-app:/app -v $HOME/.m2:/root/.m2 -v $PWD/java-app/target:/usr/src/mymaven/target -w /app maven:3-alpine "$@"
