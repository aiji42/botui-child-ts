FROM node:14-alpine3.12

RUN apk update && apk add git openssh
