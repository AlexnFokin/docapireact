FROM node:18-alpine

WORKDIR /app

COPY frontend/package.json ./

RUN yarn install

COPY frontend ./

CMD ["npm", "run", "start"]
