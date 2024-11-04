// controllers/fileController.js
const upload = require('../utils/fileUpload');

const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }
  console.log(`File uploaded: ${req.file.path}`);
  res.status(200).json({ message: 'File uploaded and stored successfully' });
};

module.exports = { uploadFile };
