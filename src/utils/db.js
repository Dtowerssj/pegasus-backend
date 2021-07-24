require('dotenv').config();

const { Pool } = require('pg');

const conn = new Pool({
  connectionString: 'postgres://ispvhhxgudkqyb:eb556ba54f30012d2d379fa8671c0a61059684207d7ace3afb4ac089824284ef@ec2-52-86-2-228.compute-1.amazonaws.com:5432/da8nucu6j9f6ud',
  max: 20,
  ssl: {
    rejectUnauthorized: false
  }
})

module.exports = conn;