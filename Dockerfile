# Set the base image to node:9.10-alpine
FROM node:9.10-alpine
# File Author / Maintainer
LABEL maintainer="phudit.c@sharmble.com"
# Update Dev tools
RUN apk add --update alpine-sdk
RUN apk add --update python python-dev py-pip build-base
# Install node-gyp & pnpm & react-scripts
RUN npm install -g node-gyp
RUN npm install -g react-scripts
# Define working directory
WORKDIR /source
ADD . /source
# Expose port
EXPOSE  3000
# Install Package
RUN yarn install
RUN yarn cache clean