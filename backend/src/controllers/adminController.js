exports.getAllUsers = async (req, res) => {
  res.status(200).json([]);
};

exports.addMovie = async (req, res) => {
  res.status(201).json({ message: "Movie added" });
};

exports.deleteMovie = async (req, res) => {
  res.status(200).json({ message: "Movie deleted" });
};
