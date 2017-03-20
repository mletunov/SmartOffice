#!/bin/bash


root=$1
log=$2

echo "`date`: Building web" >> $log
cd $root/web && \
npm install 2>&1 | tee -a $log && npm run build 2>&1 | tee -a $log && \
rm $root/docker/app/web/build -rf && cp -a build $root/docker/app/web/build && \
echo "`date`: Building web docker image" >> $log && \
docker build -t web-app $root/docker/app/web 2>&1 | tee -a $log