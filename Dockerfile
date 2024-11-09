FROM nginx:alpine
COPY index.js index.html style.css  /usr/share/nginx/html/
EXPOSE 80
