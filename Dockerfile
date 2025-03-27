FROM node:20.19.0-alpine3.20

RUN ln -s /lib/libc.musl-x86_64.so.1 /lib/ld-linux-x86-64.so.2

WORKDIR /home/node/app

COPY package*.json .

COPY . .

RUN npm i -g @nestjs/cli typescript ts-node

RUN npm install
