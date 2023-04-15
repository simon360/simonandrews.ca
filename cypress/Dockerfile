FROM cypress/base:18.12.1 AS base

WORKDIR /app

FROM base AS deps
COPY package.json package-lock.json ./
RUN npm install

FROM base AS cypress
COPY --from=deps /root/.cache/Cypress /root/.cache/Cypress
COPY --from=deps /app/node_modules ./node_modules

COPY . .

CMD npx cypress run
