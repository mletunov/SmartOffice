#!/bin/bash


root=$1
log=$2

echo "`date`: Building nginx docker image" >> $log && \
docker build -t nginx-proxy $root/docker/app/proxy 2>&1 | tee -a $log