const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "streamify",
  password: process.env.DB_PASSWORD || "streamify",
  database: process.env.DB_NAME || "streamify",
  port: 5432
});

module.exports = pool;