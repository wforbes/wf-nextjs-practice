FROM node:12-alpine3.12
WORKDIR /app
COPY package.json /app/
RUN npm install --save --force
EXPOSE 3000
COPY . .
RUN npm run build
CMD npm start