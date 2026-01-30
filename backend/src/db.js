const { Pool } = require("pg");

module.exports = new Pool({
  host: "localhost",
  user: "streamify",
  password: "streamify",
  database: "streamify",
  port: 5432
});
