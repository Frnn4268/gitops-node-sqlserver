# Use the latest oficial base Node.js image
FROM node:16

# Stablish the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy all the source code
COPY . .

# Expose the port where the application will run
EXPOSE 3000

# Command to run the application
CMD ["node", "src/index.js"]
