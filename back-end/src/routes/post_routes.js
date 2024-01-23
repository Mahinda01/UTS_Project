// post_routes.js

const express = require("express");
const router = express.Router();
const mobileController = require("../controllers/mobile_controllers");

// Create a new mobile
router.post("/mobiles", mobileController.addMobile);

// Get all mobiles
router.get("/mobiles", mobileController.getAllMobiles);

// Delete a mobile by ID
router.delete("/mobiles/:id", mobileController.deleteMobile);

module.exports = router;
