install:
    npm install
build:
    docker build -t towxml-service .
run:
    docker run -p 9600:9600 -d towxml-service
test:
    curl localhost:9600
clean:
    rm -rf node_modules