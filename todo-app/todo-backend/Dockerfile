FROM node:16.17.0-bullseye-slim

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --only=production

ENV DEBUG=todo-backend:*

USER node

CMD node ./bin/www
