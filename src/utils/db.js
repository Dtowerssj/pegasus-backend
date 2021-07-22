require('dotenv').config();

const { Pool } = require('pg');

const conn = new Pool({
  connectionString: 'postgres://gklgboomowxamk:41ae792072f7c6365a319fd4ec73de17e0536b341f502d21b115016001646ee6@ec2-3-233-100-43.compute-1.amazonaws.com:5432/d6p3df57rjsrmh',
  max: 20,
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = conn;