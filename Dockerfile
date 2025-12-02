FROM node:25-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN if [ -f package-lock.json ]; then npm ci --silent; else npm install --silent; fi

COPY . .

EXPOSE 3000

CMD ["sh", "-c", "npm run dev -- -H 0.0.0.0 -p 3000"]