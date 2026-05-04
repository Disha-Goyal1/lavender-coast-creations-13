# Build frontend
FROM node:18-alpine as build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Run backend + nginx
FROM node:18-alpine

WORKDIR /app

# Copy backend
COPY backend ./backend
WORKDIR /app/backend
RUN npm install

# Copy frontend build
WORKDIR /app
COPY --from=build /app/dist ./public

RUN npm install -g serve

EXPOSE 3000 5000

CMD sh -c "node backend/server.js & serve -s public -l 3000"
