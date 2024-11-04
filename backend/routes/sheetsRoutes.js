
const express = require('express');
const router = express.Router();
const sheetsController = require('../controllers/sheetsController');

router.post('/sheets', sheetsController.downloadGoogleSheet);

module.exports = router;
