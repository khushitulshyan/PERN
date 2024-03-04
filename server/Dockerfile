FROM node:14-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 5000

# Command to run the backend server
CMD ["node", "index.js"]
