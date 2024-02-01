# syntax=docker/dockerfile:1.2
FROM node:20 AS builder

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build

FROM nginx AS runner
COPY --from=builder /app/dist /usr/share/nginx/html