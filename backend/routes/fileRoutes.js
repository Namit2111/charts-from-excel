
const express = require('express');
const router = express.Router();
const { upload, parseCsvFile } = require('../utils/fileUpload');
const fileController = require('../controllers/fileController');

router.post('/upload', upload.single('file'), parseCsvFile, fileController.uploadFile);

module.exports = router;
