#!/bin/bash


root=$1
log=$2

echo "`date`: Prepare logic app" >> $log
cd $root/logic && \
rm $root/docker/app/logic/build -rf && cp -a . $root/docker/app/logic/build

echo "`date`: Building docker image" >> $log
docker build -t logic-app $root/docker/app/logic 2>&1 | tee -a $log && \
read container_id image_id <<< $(docker ps -a | grep logic-app | awk '{print $1" "$2}')

if [[ $image_id =~ [0-9a-f]+$ ]] ; then
   echo "`date`: Remove old container $container_id and image $image_id" >> $log
   docker rm -f $container_id && docker rmi -f $image_id && \
   docker run -d -p 5000:5000 --restart always --name logic-app logic-app
   echo "`date`: Container 'logic-app' has been successfully run" >> $log
fi
