FROM node:16.15.1-alpine
WORKDIR /server
COPY package*.json .
RUN npm ci
COPY . .
EXPOSE 3000
CMD [ "npm", "start"]