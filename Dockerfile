FROM node:20-slim

WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy everything
COPY . .

EXPOSE 3000

# Change the command to use the correct path
CMD ["node", "src/index.js"]
