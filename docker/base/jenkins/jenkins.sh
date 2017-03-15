#!/bin/bash


# The special trick here is to download and install the Oracle Java 8 installer from Launchpad.net
echo "deb http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main" | tee /etc/apt/sources.list.d/webupd8team-java.list && \
echo "deb-src http://ppa.launchpad.net/webupd8team/java/ubuntu trusty main" | tee -a /etc/apt/sources.list.d/webupd8team-java.list && \
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys EEA14886

# Make sure the Oracle Java 8 license is pre-accepted, and install Java 8
echo debconf shared/accepted-oracle-license-v1-1 select true | debconf-set-selections  && \
echo debconf shared/accepted-oracle-license-v1-1 seen true | debconf-set-selections  && \
apt-get update && apt-get install -y oracle-java8-installer libapparmor-dev && apt-get clean

mkdir -p /var/jenkins && \
adduser --disabled-login --no-create-home --shell /bin/sh jenkins && \
chown -R jenkins:jenkins /var/jenkins && \
wget -O /var/jenkins.war http://mirrors.jenkins-ci.org/war-stable/latest/jenkins.war && \
chmod 644 /var/jenkins.war