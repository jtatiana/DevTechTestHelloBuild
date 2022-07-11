# Dev tech test - Hello BUILD

## Back-end

### Installing dependencies in the project

In the terminal, locate yourself in the folder that was created

> $ cd DevTechTestHelloBuild

Proceed to run the following command to install all the necessary dependencies for the project to work

> $ npm install

Database configuration (this backend is used by PostgreSQL)
   - Create a Database in Postgres
  - Generate Database tables
    - Generate config file (use example "config.json.example" file)
   - Configure Database credentials on src/connection/config/config.json
   - To create the database, run:
      - windows 
         - npm run db
      - Different operating systems (OS)
         - cd src/connection
         - npx sequelize-cli db:migrate

### Getting Started

The last step is to run the project with the following command:

> $ npm start
