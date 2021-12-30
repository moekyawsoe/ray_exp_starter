const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    dbhost: process.env.DB_HOST,
    dbname: process.env.DB_NAME,
};