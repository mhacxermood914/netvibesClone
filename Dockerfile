FROM alpine:latest

RUN apk add --no-cache nodejs npm

# Create app directory
WORKDIR /app

COPY . /app

# install node_modules 
RUN npm install --quiet


EXPOSE 8080

ENTRYPOINT [ "node" ]

CMD ["app.js"]