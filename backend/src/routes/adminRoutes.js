const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");
const controller = require("../controllers/adminController");

router.get("/users", auth, admin, controller.getUsers);

module.exports = router;
