# Project Management App - Express Server

This is the backend server for the Project Management App. It's built with Express, Sequelize, and MySQL.

## Prerequisites

- Node.js
- MySQL

## Setup

1. Install the dependencies:
```npm install```

2. Create a `.env` file in the root of the `express-server` directory. This file should contain your environment variables:
```
DATABASE_URL = the database name you set up DATABASE_USERNAME = Your username for mysql DATABASE_PASSWORD = Your Password JWT_SECRET = your secret JWT
```

3. Run the database migrations:
```npx sequelize-cli db:migrate```

4. Start the server:
```npm run start```


Now, the server should be running at `http://localhost:3000`.

## Sequelize CLI

This project utilizes Sequelize and the Sequelize CLI, so once you install all the dependencies you will be able to use these tools.
Sequelize CLI is a tool that allows you to run migrations, seed your database, and more. Here's how to install it and some basic commands:


```bash
npm install -g sequelize-cli
```

To create a new migration:

```bash
sequelize migration:generate --name migration-name
```

To run all pending migrations:
```bash
sequelize db:migrate
```

To undo the last migration:
```bash
sequelize db:migrate:undo
```


## API Endpoints

- `/api/projects`: Endpoint for managing projects.
- `/api/tasks`: Endpoint for managing tasks.
- `/api/registration`: Endpoint for registerng new users.
- `/api/login`: Endpoint for logging in exisiting users.

## License

This project is licensed under the MIT License.