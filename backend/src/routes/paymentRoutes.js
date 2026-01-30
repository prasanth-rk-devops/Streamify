const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const controller = require("../controllers/paymentController");

router.post("/subscribe", auth, controller.subscribe);

module.exports = router;
