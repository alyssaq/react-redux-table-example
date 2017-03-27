FROM node:alpine

# Copy the application `src` folder inside the container
# Install npm dependencies
ADD . /app
RUN cd /app; npm install
WORKDIR /app

EXPOSE 4000
CMD ["npm", "start"]