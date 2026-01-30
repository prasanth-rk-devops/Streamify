const router = require("express").Router();
const controller = require("../controllers/movieController");

router.get("/details/:id", controller.getById);
router.get("/:category", controller.getByCategory);

module.exports = router;
