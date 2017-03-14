#!/bin/bash


PREFIX="usr/local/"

mkdir -p "$PREFIX" \
&& wget -qO- $1 | tar xvJ --strip-components=1 -C "$PREFIX" \
&& npm config set unsafe-perm true -g --unsafe-perm \
&& npm install webpack-dev-server -g