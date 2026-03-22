FROM node:24-alpine AS base

RUN apk add --no-cache libc6-compat
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

FROM base AS deps-dev
COPY package.json package-lock.json ./
RUN npm install

FROM base AS deps-production
COPY package.json package-lock.json ./
RUN npm install

FROM base AS dev

RUN apk add --no-cache git

ENV NODE_ENV development

COPY --from=deps-dev /app/node_modules ./node_modules
COPY . .

EXPOSE 3000
ENV PORT 3000

CMD ["npm", "run", "dev"]

# ── Storybook ────────────────────────────────────────────────────────────────

FROM base AS storybook-dev
ENV NODE_ENV development
COPY --from=deps-dev /app/node_modules ./node_modules
COPY . .
EXPOSE 3003
CMD ["npx", "storybook", "dev", "--port", "3003", "--no-open"]

FROM base AS storybook-builder
COPY --from=deps-dev /app/node_modules ./node_modules
COPY . .
RUN npm run build-storybook

FROM nginx:stable-alpine AS storybook
COPY docker/storybook-nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=storybook-builder /app/storybook-static /usr/share/nginx/html
EXPOSE 8080

# ── Next.js production ───────────────────────────────────────────────────────

FROM base AS builder-production
COPY --from=deps-production /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM base AS production

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# You only need to copy next.config.ts if you are NOT using the default configuration
COPY --from=builder-production /app/next.config.ts ./
COPY --from=builder-production /app/public ./public
COPY --from=builder-production /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder-production --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder-production --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

CMD ["node", "server.js"]
