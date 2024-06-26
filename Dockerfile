FROM alpine:3.19
RUN apk add --no-cache nodejs npm

WORKDIR /app
COPY package.json /app
RUN npm install

COPY . /app 

EXPOSE 3000
CMD ["node", "app.js"]
