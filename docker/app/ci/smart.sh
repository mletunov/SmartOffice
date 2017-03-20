#!/bin/bash


workspace=/var/cron
root=$workspace/SmartOffice
log=/var/cron/log

export SHELL=/bin/sh
export PATH=/usr/local/sbin:/usr/local/bin:/sbin:/bin:/usr/sbin:/usr/bin

if [ ! -d $root ]; then
    echo "`date`: Git clone " >> $log
    mkdir -p $workspace && cd $workspace
    changes=$(git clone https://github.com/mletunov/SmartOffice.git 2>&1 | tee -a $log)
else
    echo "`date`: Git pull" >> $log
    cd $root
    changes=$(git pull 2>&1 | tee -a $log | grep -v up-to-date)
fi

if [ -n "$changes" ]; then
    # build web
    web_build=$root/docker/app/web/build.sh
    chmod +x $web_build && sync && $web_build $root $log

    # build api mock
    api_build=$root/docker/app/device/build.sh
    chmod +x $api_build && sync && $api_build $root $log

    # build logic app
    logic_build=$root/docker/app/logic/build.sh
    chmod +x $logic_build && sync && $logic_build $root $log
    
    # build nginx proxy
    proxy_build=$root/docker/app/proxy/build.sh
    chmod +x $proxy_build && sync && $proxy_build $root $log

    cd $workspace && \
    docker-compose down && \
    docker-compose up -d && \
    docker rmi $(docker images | grep "^<none>" | awk '{print $3}')
fi
