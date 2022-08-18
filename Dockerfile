FROM node:16.16.0-alpine

# create destination directory
RUN mkdir -p /usr/src/shop
WORKDIR /usr/src/shop

# update and install dependency
RUN apk update && apk upgrade

# copy the app, note .dockerignore
COPY . /usr/src/shop/
RUN npm install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

EXPOSE 5000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=5000

# start the app
CMD [ "npm", "start" ]
