const express = require("express");
const authMiddleware = require("../middleware/authMiddleware"); // Import middleware

const router = express.Router();

// Example of a PROTECTED route
router.get("/", authMiddleware, (req, res) => {
  res.json({ message: "Protected workout data!" });
});

module.exports = router;
