FROM node:18-alpine
WORKDIR /home/app
COPY . ./
RUN npm i
EXPOSE 3001
CMD [ "npm", "run", "dev" ]