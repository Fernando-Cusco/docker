FROM ubuntu:18.04
RUN apt-get update
RUN apt-get install -y nginx
# WORKDIR /usr/share/nginx/html
WORKDIR /var/www/html
ADD app /var/www/html
# RUN chmod 755 /var/www/html/index.html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]