# Docker

## Dev

`docker build -f docker/Dockerfile.dev -t react-app-template:dev .`

Creates a docker dev image and names it "react-app-template:dev".

`docker run -d --rm -p 80:80 react-app-template:dev`

Starts a container from the "react-app-template:dev" image.
Open [http://localhost/ReactAppTemplate](http://localhost/ReactAppTemplate) to view it in the browser.

## Prod

`docker build -f docker/Dockerfile.prod -t react-app-template:prod .`

Creates a docker prod image and names it "react-app-template:prod".

`docker run -d --rm -p 80:80 react-app-template:prod`

Starts a container from the "react-app-template:prod" image.
Open [http://localhost/ReactAppTemplate](http://localhost/ReactAppTemplate) to view it in the browser.
