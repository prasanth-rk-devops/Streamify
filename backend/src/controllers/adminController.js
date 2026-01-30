const db = require("../db");

exports.getUsers = async (req, res) => {
  const users = await db.query(
    "SELECT id,email,role FROM users"
  );
  res.json(users.rows);
};
