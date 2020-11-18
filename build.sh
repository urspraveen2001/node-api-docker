#!/usr/bin/env sh

docker build --build-arg=COMMIT=$(git rev-parse HEAD) -t nodeapp/latest

