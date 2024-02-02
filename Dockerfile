# syntax=docker/dockerfile:1.2
FROM nginx

ARG PORT=8080
EXPOSE $PORT

# Update the package list
RUN apt-get update

# Install curl to download the NodeSource setup script
RUN apt-get install -y curl

# Add the NodeSource APT repository for Node.js LTS
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -

# Install Node.js and npm
RUN apt-get install -y nodejs

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm ci
RUN touch .env

# Replace default PORT with the one passed in
RUN sed -i "s/listen\s*80;/listen $PORT;/" /etc/nginx/conf.d/default.conf

ENTRYPOINT ["/app/scripts/entrypoint.sh"]