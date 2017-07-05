'use strict';

const express = require('express');
const router = express.Router();

// Get Homepage
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;