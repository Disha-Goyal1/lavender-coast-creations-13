# Step 1: Build frontend
FROM node:20 AS build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Step 2: Run app
FROM node:20

WORKDIR /app

# Copy backend
COPY backend ./backend

# Copy frontend build
COPY --from=build /app/dist ./public

# Install dependencies
WORKDIR /app/backend
RUN npm install

# Install serve
RUN npm install -g serve

# Expose ports
EXPOSE 3000 5000

# Run both safely
CMD ["sh", "-c", "node server.js & serve -s /app/public -l 3000"]
