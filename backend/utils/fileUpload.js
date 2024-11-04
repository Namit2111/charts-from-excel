// utils/fileUpload.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Ensure the uploads directory exists
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Storage configuration for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

// File filter to allow only CSV, XLS, and XLSX files
const fileFilter = (req, file, cb) => {
  const extName = /\.(csv|xls|xlsx)$/.test(file.originalname.toLowerCase());

  if (extName) {
    return cb(null, true);
  }
  cb(new Error('Please upload a CSV or Excel file'));
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
