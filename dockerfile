###########################################################################
# Followed guide from: https://mherman.org/blog/dockerizing-a-react-app/  #
###########################################################################

# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_VIDEO_URL http://172.18.0.3/vod/
ENV REACT_APP_POSTER_URL http://172.18.0.3/thumbs/

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# add app
COPY . ./

# start app
CMD ["npm", "start"]

