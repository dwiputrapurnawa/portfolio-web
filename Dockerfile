FROM node:20-alpine

WORKDIR /app

# install pnpm global
RUN npm install -g pnpm

# copy dependency files
COPY package.json pnpm-lock.yaml ./

# install dependencies
RUN pnpm install --frozen-lockfile

# copy source
COPY . .

# build nextjs
RUN pnpm build

EXPOSE 3001

CMD ["pnpm", "start"]
