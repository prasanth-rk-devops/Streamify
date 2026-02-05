exports.getProfile = async (req, res) => {
  res.status(200).json({
    id: 1,
    name: "Demo User",
    email: "user@streamify.com"
  });
};

exports.updateProfile = async (req, res) => {
  res.status(200).json({
    message: "Profile updated successfully"
  });
};
