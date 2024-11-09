FROM nginx:alpine
COPY index.js index.html index.css  /usr/share/nginx/html/
EXPOSE 80
