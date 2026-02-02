# Stage 1: Build the Vite app
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ARG VITE_AUTH_ENDPOINT

ARG VITE_ENVIRONMENT

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "preview"]
 