require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser:  'root',
  dbPassword:  'admin',
  dbHost:  'localhost',
  dbName:  'node_crud_db',
  dbPort:  process.env.DB_PORT,
}

module.exports = { config };
