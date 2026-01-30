const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const controller = require("../controllers/historyController");

router.post("/:movieId", auth, controller.addHistory);

module.exports = router;
