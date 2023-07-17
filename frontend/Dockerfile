FROM node:20-alpine3.18
LABEL authors="jonm"
RUN mkdir -p /src/app
WORKDIR /src/app
COPY . .
RUN npm install
EXPOSE 3001
CMD [ "npm", "start" ]