#Node.js version image
FROM node:20

# Create app directory, copy package.json and package-lock.json
WORKDIR /usr/src/app
COPY package*.json ./

# Dependencies
RUN npm install
COPY index.js ./

# Run code
EXPOSE 80
CMD ["node", "index.js"]