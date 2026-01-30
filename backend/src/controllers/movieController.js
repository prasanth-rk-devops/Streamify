const db = require("../db");

exports.getByCategory = async (req, res) => {
  const movies = await db.query(
    "SELECT * FROM movies WHERE category=$1",
    [req.params.category]
  );
  res.json(movies.rows);
};

exports.getById = async (req, res) => {
  const result = await db.query(
    "SELECT * FROM movies WHERE id=$1",
    [req.params.id]
  );
  res.json(result.rows[0]);
};
