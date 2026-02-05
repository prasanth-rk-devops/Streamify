const router = require("express").Router();
const controller = require("../controllers/profileController");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, controller.getProfile);
router.put("/", authMiddleware, controller.updateProfile);

module.exports = router;
