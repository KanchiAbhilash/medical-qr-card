const express = require("express");

const router = express.Router();

const {
  generateProfile
} = require("../controllers/profileController");

router.post("/generate", generateProfile);

module.exports = router;