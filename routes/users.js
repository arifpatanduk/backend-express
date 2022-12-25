const express = require("express");
const router = express.Router();

// main users endpoint
router.get("/", (req, res) => {
  res.json("users");
});

module.exports = router;
