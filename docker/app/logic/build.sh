#!/bin/bash


root=$1
log=$2

echo "`date`: Prepare logic app" >> $log
cd $root/logic && \
rm $root/docker/app/logic/build -rf && cp -a . $root/docker/app/logic/build && \
echo "`date`: Building logic docker image" >> $log && \
docker build -t logic-app $root/docker/app/logic 2>&1 | tee -a $log