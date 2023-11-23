# Project Management App - Express Server

This is the backend server for the Project Management App. It's built with Express, Sequelize, and MySQL.

## Prerequisites

- Node.js
- MySQL

## Setup

1. Install the dependencies:
```npm install```

2. Create a `.env` file in the root of the `express-server` directory. This file should contain your environment variables:
```DATABASE_URL = the database name you set up DATABASE_USERNAME = Your username for mysql DATABASE_PASSWORD = Your Password JWT_SECRET = your secret JWT```

3. Run the database migrations:
```npx sequelize-cli db:migrate```

4. Start the server:
```npm run start```


Now, the server should be running at `http://localhost:3000`.

## API Endpoints

- `/api/projects`: Endpoint for managing projects.
- `/api/tasks`: Endpoint for managing tasks.
- `/api/registration`: Endpoint for registerng new users.
- `/api/login`: Endpoint for logging in exisiting users.

## License

This project is licensed under the MIT License.