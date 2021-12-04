FROM node:latest

COPY package.json .

# install node_modules 
RUN npm install --quiet

# Create app directory
WORKDIR /app

COPY . /app



EXPOSE 8080

ENTRYPOINT [ "node" ]

CMD ["app.js"]