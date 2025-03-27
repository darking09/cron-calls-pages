# cron-calls-pages

This is a repository for the cron-calls-pages project. This project is a simple web application that allows users to schedule cron jobs to call a URL at a specified time. The application is built using Python and Flask, and uses a SQLite database to store the cron job information. The application also includes a simple web interface for users to create, edit, and delete cron jobs.

## Installation

To install the cron-calls-pages project, follow these steps:

1. Clone the repository:

``` bash
    git@github.com:darking09/cron-calls-pages.git
```

2. Start Docker container:

``` bash
    docker-compose up
```

``` bash
    docker-compose up
```

3. Access the application in your web browser:

``` bash
    http://localhost:3000
```

If you cannot start docker container, you can run the application locally by following these steps:

1. Install nvm to run nodejs version 20.19.0:
``` bash
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

2. Install nodejs version 20.19.0:

``` bash
    nvm install 20.19.0
```

3. Install package dependencies:

``` bash
    npm install
```

4. Start the application:

``` bash
    npm run start:dev
```

5. Access the application in your web browser:

``` bash
    http://localhost:3000
```

## Usage

To use the cron-calls-pages application, follow these steps:
