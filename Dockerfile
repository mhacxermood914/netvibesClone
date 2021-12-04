FROM node:latest
# Create app directory
WORKDIR /usr/src/app
# Copying package.json AND package-lock.json
COPY package*.json ./
# install node_modules 
RUN npm install --quiet

COPY . .

EXPOSE 8080
CMD ["node", "app.js"]