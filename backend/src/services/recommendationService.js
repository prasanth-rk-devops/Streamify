const db = require("../db");

exports.getRecommendations = async () => {
  const res = await db.query(
    "SELECT * FROM movies ORDER BY RANDOM() LIMIT 5"
  );
  return res.rows;
};
