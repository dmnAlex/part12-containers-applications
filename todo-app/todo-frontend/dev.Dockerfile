FROM node:16

WORKDIR /usr/src/app

COPY . .

ENV REACT_APP_BACKEND_URL=http://server:3000

RUN npm install

CMD [ "npm", "start" ]
