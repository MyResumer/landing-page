# Stage 1: Build the Next.js application
FROM node:24-alpine AS builder

WORKDIR /app

# Copy dependencies and install
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Build Next.js app
RUN npm run build

# Stage 2: Serve using standalone output
FROM node:24-alpine

WORKDIR /app

# Copy only what's needed for running the app
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

# Optional: expose default port
EXPOSE 3000

# Run the production server
CMD ["node", "server.js"]



