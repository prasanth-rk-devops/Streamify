exports.getAllMovies = async (req, res) => {
  res.status(200).json([
    { id: 1, title: "Sample Movie", category: "action" }
  ]);
};

exports.getByCategory = async (req, res) => {
  const { category } = req.params;
  res.status(200).json([
    { id: 2, title: `Sample ${category} Movie`, category }
  ]);
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    id,
    title: "Sample Movie Details"
  });
};
