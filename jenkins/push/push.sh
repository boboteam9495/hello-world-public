#!/bin/bash

DOCKER_PASSWORD="boboteam9495@123456789"
DOCKER_USERNAME="boboteam9495"


docker login -u "$DOCKER_USERNAME" -p "$DOCKER_PASSWORD"
docker push boboteam9495/app:$BUILD_TAG
