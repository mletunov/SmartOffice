#!/bin/bash


root=$1
log=$2

echo "`date`: Building api mock" >> $log
cd $root/web/api_mock && \
npm install 2>&1 | tee -a $log && npm run build 2>&1 | tee -a $log && \
rm $root/docker/app/device/build -rf && cp -a build $root/docker/app/device/build

echo "`date`: Building docker image" >> $log
docker build -t device-api $root/docker/app/device 2>&1 | tee -a $log && \
read container_id image_id <<< $(docker ps -a | grep device-api | awk '{print $1" "$2}')

if [[ $image_id =~ [0-9a-f]+$ ]] ; then
   echo "`date`: Remove old container $container_id and image $image_id" >> $log
   docker rm -f $container_id && docker rmi -f $image_id && \
   docker run -d -p 3001:3001 --restart always --name device-api device-api
   echo "`date`: Container 'device-api' has been successfully run" >> $log
fi
