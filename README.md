# Trax

Team:

* David Funnell - Service microservice
* Tommy Mai - Sales microservice

## Start Up Instructions

1. Fork and clone the project from https://gitlab.com/dfunnell/trax

2. Open up a command terminal and cd into your project directory.

    a. `git clone <HTTPS Link>`

    b. `cd trax`

    c. `docker volume create beta-data`

    d. `docker compose build`

    e. `docker compose up`

3. Open up Docker Desktop and ensure all containers are running without errors

4. After successfully building and starting your containers, go to http://localhost:3000/ to view the application. We recommend you start by adding manufacturers, models and automobiles within the inventory tab. These added vehicles will be used to be able to create new service appointments within the service microservice and create new sales within the sales microservice.

## Design
Below is a diagram of the app architecture. It shows our 3 microservices along with our React front-end running within docker and their port locations to your local.

![System Diagram](docs/readme_images/Microservice.png)

- [API Design](docs/api-documentation.md)
- [Data models](docs/data-models.md)
