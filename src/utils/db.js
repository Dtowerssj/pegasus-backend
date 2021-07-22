require('dotenv').config();

const { Pool } = require('pg');

const conn = new Pool({
  connectionString: process.env.DB_URI
})

module.exports = conn;