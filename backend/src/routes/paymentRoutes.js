const router = require("express").Router();
const controller = require("../controllers/paymentController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", authMiddleware, controller.createPayment);
router.get("/", authMiddleware, controller.getPayments);

module.exports = router;
