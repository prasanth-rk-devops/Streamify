const db = require("../db");

exports.subscribe = async (userId, plan) => {
  await db.query(
    "INSERT INTO subscriptions(user_id, plan, status) VALUES($1,$2,'ACTIVE')",
    [userId, plan]
  );

  await db.query(
    "INSERT INTO payments(user_id, amount, status) VALUES($1,499,'SUCCESS')",
    [userId]
  );
};
