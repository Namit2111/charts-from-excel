
const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }


  if (!req.graphData) {
    return res.status(400).json({ message: 'Failed to parse CSV file' });
  }

  console.log(`File uploaded and parsed: ${req.file.path}`);
  

  res.status(200).json({
    message: 'File uploaded and parsed successfully',
    graphData: req.graphData,
  });
};

module.exports = { uploadFile };
