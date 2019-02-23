FROM node:10-alpine
WORKDIR /usr/app/src
COPY package*.json ./
RUN yarn
COPY . .
EXPOSE 8080
CMD ["yarn", "start:prod"]