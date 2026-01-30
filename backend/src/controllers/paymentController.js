const paymentService = require("../services/paymentService");

exports.subscribe = async (req, res) => {
  await paymentService.subscribe(req.user.id, req.body.plan);
  res.json({ message: "Subscription active" });
};
