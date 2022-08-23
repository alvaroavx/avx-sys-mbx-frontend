FROM node:15

WORKDIR /usr/src/app

COPY package.json ./
RUN npm install --force

COPY . .
EXPOSE $PORT

ENV NODE_ENV=production
ENV HOST=0.0.0.0
RUN npm run build

CMD [ "npm", "run", "start" ]