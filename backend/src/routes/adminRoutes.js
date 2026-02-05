const router = require("express").Router();
const controller = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");

router.use(authMiddleware);
router.use(adminMiddleware);

router.get("/users", controller.getAllUsers);
router.post("/movies", controller.addMovie);
router.delete("/movies/:id", controller.deleteMovie);

module.exports = router;
