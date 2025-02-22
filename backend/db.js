// config/db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST, // Ensure this matches your database's host
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
  });
  

module.exports = pool;