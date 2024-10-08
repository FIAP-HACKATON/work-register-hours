FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run db:generate:models
RUN npm run build

EXPOSE 4001

# Run
CMD [ "npm", "run", "start" ]
