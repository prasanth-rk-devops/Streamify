const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const controller = require("../controllers/profileController");

router.get("/", auth, controller.getProfiles);

module.exports = router;
