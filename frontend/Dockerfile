FROM node:8

# Prepare app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/

# Install dependencies
COPY package.json /usr/src/app/
ADD . /usr/src/app/
RUN rm -rf node_modules/
RUN npm install

EXPOSE 3000
