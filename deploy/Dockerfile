FROM node:20.19.0-alpine3.20

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/

RUN npm i -g @nestjs/cli typescript ts-node

RUN npm install && npm cache clean --force

COPY ./ /usr/src/app

ENV NODE_ENV production

ENV PORT 80

EXPOSE 80

RUN npm run test

RUN npm run build

CMD ["npm", "run", "start:prod"]
