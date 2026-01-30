const db = require("../db");

exports.getProfiles = async (req, res) => {
  const profiles = await db.query(
    "SELECT * FROM profiles WHERE user_id=$1",
    [req.user.id]
  );
  res.json(profiles.rows);
};
