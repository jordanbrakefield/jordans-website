// server/routes/messages.js
const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
  res.json({ message: 'Hello from the API' });
});

module.exports = router;
