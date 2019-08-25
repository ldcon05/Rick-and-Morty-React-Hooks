FROM node:latest
LABEL author="Daniel Con"

COPY ["package.json", "package-lock.json", "/app/"]
WORKDIR /app

RUN npm install --no-progress --ignore-optional

COPY . .
EXPOSE 8080

CMD [ "npm", "start" ]

