FROM node:12-stretch
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./
COPY bower*.json ./
RUN npm install
RUN npm install webgme
RUN npm install -g bower
RUN echo '{ "allow_root": true }' > /root/.bowerrc
RUN pwd
RUN ls
RUN bower install 
# Copy app source code
COPY . .
#Expose port and start application
EXPOSE 8888
CMD [ "npm", "start" ]
