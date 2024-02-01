#!/bin/bash

npm run build

cp -r /app/dist/* /usr/share/nginx/html

nginx -g 'daemon off;'