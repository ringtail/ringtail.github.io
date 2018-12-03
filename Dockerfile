FROM nginx:1.15.7
COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY . /usr/share/nginx/html
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
