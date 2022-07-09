# Backend Readme 
## 1. Setup
  - Install dependencies
    > npm i 
  - Config DB (this backend uses PostgreSQL)
    > create a DB in Postgres
  - generate DB tables
    - config file (use config.json.example)
    configure DB credentials on src/connection/config/config.json
    - windows 
      > npm run db
    - other OS
      >cd src/connection
      >npx sequelize-cli db:migrate
## 2. Run
  - Execute
    >npm start
    
## 3. Production 
  This repo belong to a technical test, production section is not required