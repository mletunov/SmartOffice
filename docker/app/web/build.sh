#!/bin/bash


root=$1
log=$2

echo "`date`: Building web" >> $log
cd $root/web && \
npm install 2>&1 | tee -a $log && npm run build 2>&1 | tee -a $log && \
rm $root/docker/app/web/build -rf && cp -a build $root/docker/app/web/build

echo "`date`: Building docker image" >> $log
docker build -t app $root/docker/app/web 2>&1 | tee -a $log && \
read container_id image_id <<< $(docker ps -a | grep web | awk '{print $1" "$2}')

if [[ $image_id =~ [0-9a-f]+$ ]] ; then
   echo "`date`: Remove old container $container_id and image $image_id" >> $log
   docker rm -f $container_id && docker rmi -f $image_id && \
   docker run -d -p 80:80 -p 443:443 --restart always --name web app
   echo "`date`: Container 'web' has been successfully run" >> $log
fi
