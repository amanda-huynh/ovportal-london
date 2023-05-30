FROM node:14-alpine

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build

# Install `serve` command to run static file server
RUN npm install -g serve

EXPOSE 8080

# Serve the static files on port 8080
CMD ["serve", "-s", "build", "-l", "8080"]