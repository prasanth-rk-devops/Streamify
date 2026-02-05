const router = require("express").Router();
const controller = require("../controllers/historyController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, controller.getWatchHistory);

module.exports = router;
