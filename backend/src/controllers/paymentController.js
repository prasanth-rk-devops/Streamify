exports.createPayment = async (req, res) => {
  res.status(200).json({ success: true });
};

exports.getPayments = async (req, res) => {
  res.status(200).json([]);
};
