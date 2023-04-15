FROM node:18.16.0-alpine AS base

RUN apk add --no-cache libc6-compat
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

FROM base AS deps-production
COPY package.json package-lock.json ./
RUN npm install --omit=dev

FROM deps-production AS deps-dev
RUN npm install

FROM base AS dev

RUN apk add --no-cache git

ENV NODE_ENV development

COPY --from=deps-dev /app/node_modules ./node_modules
COPY . .

EXPOSE 3000
ENV PORT 3000

CMD ["npm", "run", "dev"]

FROM base AS builder-production
COPY --from=deps-production /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM base AS production

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder-production /app/next.config.js ./
COPY --from=builder-production /app/public ./public
COPY --from=builder-production /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder-production --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder-production --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

CMD ["node", "server.js"]
