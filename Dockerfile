FROM node:alpine

# Set application working directory
RUN mkdir /app
WORKDIR /app

# Install JS app dependencies
COPY package.json package.json
RUN npm install

# Add files needed to build the app
# Copy the application `src` folder inside the container
ADD webpack.config.js /app
ADD .babelrc /app
ADD .eslintrc /app
ADD server.js /app
ADD src /app/src/
RUN echo `ls /app`
RUN npm run build

EXPOSE 4000
CMD ["npm", "start"]