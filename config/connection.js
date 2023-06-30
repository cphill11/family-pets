// define sequelize in a manner to use jaws DB to use DB as a service as opposed to locally

const Sequelize = require('sequelize');

// require dotenv (zero dependency module that loads environment variables) as early as possible in application; using ES6 format
require('doenv').config();

// establish a connection to the jaws DB
const sequelize = process.env.JAWSDB_URL    
    ? new Sequelize(process.env.JAWSDB_URL)
    : new Sequelize (
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: "localhost",
            dialect: "mysql",
            port: 3306,
        }
    );
module.exports= sequelize;
