#!/bin/bash


root=$1

cd $root/web && \
npm install && npm run build && \
rm $root/docker/app/web/build -rf && cp -a build $root/docker/app/web/build

docker build -t app $root/docker/app/web && \
read container_id image_id <<< $(docker ps -a | grep web | awk '{print $1" "$2}')

if [[ $image_id =~ [0-9a-f]+$ ]] ; then
   echo "remove old container and image"
   docker rm -f $container_id && docker rmi -f $image_id && \
   docker run -d -p 80:80 -p 443:443 --restart always --name web app
fi
