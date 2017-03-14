#!/bin/bash


apt-get install -y ca-certificates nginx uwsgi

# forward request and error logs to docker log collector
ln -sf /dev/stdout /var/log/nginx/access.log
ln -sf /dev/stderr /var/log/nginx/error.log

# switch off ipv6
sed -i "/ipv6only/ s/^/#/" /etc/nginx/sites-available/default

# switch off daemon mode
echo "daemon off;" >> /etc/nginx/nginx.conf