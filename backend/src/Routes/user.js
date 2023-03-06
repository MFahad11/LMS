const express = require("express");
const router = express.Router();
const userController = require('../controllers/user');

router.post("/user", userController.createUser);
router.put("/user/:id", userController.updatePayment);
module.exports = router;