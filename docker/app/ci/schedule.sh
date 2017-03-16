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
    chmod +x $root/docker/app/web/build.sh && sync && $root/docker/app/web/build.sh $root $log
fi
