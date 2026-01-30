const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db");

exports.register = async (email, password) => {
  const hash = await bcrypt.hash(password, 10);
  await db.query(
    "INSERT INTO users(email,password) VALUES($1,$2)",
    [email, hash]
  );
};

exports.login = async (email, password) => {
  const res = await db.query(
    "SELECT * FROM users WHERE email=$1",
    [email]
  );

  const user = res.rows[0];
  if (!user) throw new Error("Invalid user");

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) throw new Error("Invalid password");

  return jwt.sign(
    { id: user.id, role: user.role },
    "secret",
    { expiresIn: "1h" }
  );
};
