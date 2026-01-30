const authService = require("../services/authService");

exports.register = async (req, res) => {
  await authService.register(req.body.email, req.body.password);
  res.sendStatus(201);
};

exports.login = async (req, res) => {
  try {
    const token = await authService.login(
      req.body.email,
      req.body.password
    );
    res.json({ token });
  } catch {
    res.sendStatus(401);
  }
};
