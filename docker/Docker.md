# Docker

## Dev

`docker build -f docker/Dockerfile.dev -t react-app-template:dev .`

Creates a docker dev image and names it "react-app-template:dev".

`docker run -d --rm -p 8080:8080 react-app-template:dev`

Starts a container from the "react-app-template:dev" image.
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
