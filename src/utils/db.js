require('dotenv').config();

const { Pool } = require('pg');

const conn = new Pool({
  connectionString: process.env.DBURI,
  max: 20,
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = conn;