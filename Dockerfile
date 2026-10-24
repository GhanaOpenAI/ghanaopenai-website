# Stage 1: Build the Astro static site
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install --no-audit --no-fund

COPY . .

RUN npm run build

# Stage 2: Ultra-lightweight Production Runtime
FROM node:22-alpine AS runner

WORKDIR /app

RUN apk add --no-cache curl && \
    npm install express compression --no-audit --no-fund && \
    npm cache clean --force

ENV NODE_ENV=production
ENV PORT=3000

COPY --from=builder /app/dist ./dist
COPY server.mjs ./server.mjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -f http://127.0.0.1:3000/health || exit 1

CMD ["node", "server.mjs"]
