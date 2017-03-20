#!/bin/bash


root=$1
log=$2

echo "`date`: Building api mock" >> $log
cd $root/web/api_mock && \
npm install 2>&1 | tee -a $log && npm run build 2>&1 | tee -a $log && \
rm $root/docker/app/device/build -rf && cp -a build $root/docker/app/device/build && \
echo "`date`: Building device docker image" >> $log && \
docker build -t device-api $root/docker/app/device 2>&1 | tee -a $log