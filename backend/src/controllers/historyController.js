const db = require("../db");

exports.addHistory = async (req, res) => {
  await db.query(
    "INSERT INTO watch_history(user_id, movie_id) VALUES($1,$2)",
    [req.user.id, req.params.movieId]
  );
  res.sendStatus(200);
};
