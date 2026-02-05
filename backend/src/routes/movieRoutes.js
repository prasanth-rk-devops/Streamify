const router = require("express").Router();
const controller = require("../controllers/movieController");

router.get("/", controller.getAllMovies);
router.get("/category/:category", controller.getByCategory);
router.get("/:id", controller.getById);

module.exports = router;
