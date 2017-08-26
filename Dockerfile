FROM node:8
WORKDIR  /code
COPY ./* /code/
RUN npm install -g typescript && npm install
ENV PATH=$PATH:/code/node_modules/.bin