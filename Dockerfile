# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build TypeScript source code
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "dist/app.js"]
