FROM node:14-alpine as build

# Set working directory
WORKDIR /client/src/app/

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy source code
COPY . .

# Build the React app
RUN npm run build
# RUN npm start

# Stage 2 - Serve the React app with nginx
# FROM nginx:alpine
# COPY --from=build /app/build /usr/share/nginx/html
# COPY ./client/

EXPOSE 3000
CMD ["npm", "run", "start"]
