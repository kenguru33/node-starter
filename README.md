# A very simple node starter project configured for testing with jest and wallaby 

# Run in docker environment
### Install node modules
docker run -it -w=/home/node/app --user node --rm --volume $PWD:/home/node/app node npm install

### run docker dev mode
docker-compose up

