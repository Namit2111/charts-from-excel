// utils/fileUpload.js
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const csv = require('csv-parser');
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


const parseCsvFile = (req, res, next) => {
  const file = req.file;
  
  if (!file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  const filePath = file.path;
  const results = [];

  fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      // Ensure CSV has at least two columns
      if (results.length === 0 || Object.keys(results[0]).length < 2) {
        return res.status(400).json({ message: 'CSV file must contain at least two columns' });
      }

      // Extract labels and values for the bar chart
      const columns = Object.keys(results[0]); // Get column names
      const labels = results.map(row => row[columns[0]]); // First column as labels
      const values = results.map(row => parseFloat(row[columns[1]])); // Second column as values

      // Prepare response with chart data
      req.graphData = {
        type: ['bar','pie'], // Specify graph type
        data: {
          columns: columns,
          labels: labels,
          values: values,
        }
      };

      next();
    })
    .on('error', (err) => {
      res.status(500).json({ message: 'Error reading CSV file', error: err.message });
    });
};






const upload = multer({ storage, fileFilter });

module.exports = {upload,parseCsvFile};
