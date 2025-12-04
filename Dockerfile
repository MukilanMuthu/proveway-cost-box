# Stage 1: Use the official Nginx base image
FROM nginx:stable-alpine

# Stage 2: Copy your static site files from your local 'html' folder 
# to the default Nginx public directory (/usr/share/nginx/html) inside the container.
COPY ./html /usr/share/nginx/html

# Optional: Copy a custom Nginx configuration file if you have one.
# Uncomment the following line if you created a custom nginx.conf file:
# COPY nginx.conf /etc/nginx/nginx.conf

# Stage 3: The container starts Nginx automatically (default behavior of the Nginx base image)
# and exposes port 80.
EXPOSE 80
