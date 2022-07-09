# Dev tech test - Hello BUILD

## Back-end

### Installing dependencies in the project

In the terminal, locate yourself in the folder that was created

> $ cd dev-tech-test

Proceed to run the following command to install all the necessary dependencies for the project to work

> $ npm install

Database configuration (this backend is used by PostgreSQL)
   - Create a DB in Postgres
  - Generate DB tables
    - config file (use config.json.example)
   - Configure DB credentials on src/connection/config/config.json
    - windows 
      > npm run db
    - other OS
      >cd src/connection
      >npx sequelize-cli db:migrate

### Getting Started

The last step is to run the project with the following command:

> $ npm start
