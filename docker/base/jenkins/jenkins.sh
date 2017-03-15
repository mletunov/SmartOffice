#!/bin/bash


# Install OpenJDK 8 runtime without X11 support
echo "deb http://ftp.debian.org/debian jessie-backports main" | tee /etc/apt/sources.list.d/backports.list && \
apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 8B48AD6246925553 && \
apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 7638D0442B90D010 && \
apt-get update && \
apt-get -t jessie-backports install -y openjdk-8-jre-headless --no-install-recommends && \
rm /etc/apt/sources.list.d/backports.list && rm -rf /var/lib/apt/lists/ftp.debian.org*

mkdir -p $JENKINS_HOME && \
adduser --disabled-login --no-create-home --shell /bin/sh jenkins && \
chown -R jenkins:jenkins $JENKINS_HOME && \
wget -O $JENKINS_WAR http://mirrors.jenkins-ci.org/war-stable/latest/jenkins.war && \
chmod 644 $JENKINS_WAR