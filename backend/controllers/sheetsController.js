
const axios = require('axios');
const path = require('path');
const fs = require('fs');

const downloadGoogleSheet = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({ message: 'URL is required' });
  }

  try {
    // Extract the Google Sheet ID from the URL
    const sheetId = url.match(/\/d\/([a-zA-Z0-9-_]+)/)?.[1];
    if (!sheetId) {
      return res.status(400).json({ message: 'Invalid Google Sheet URL' });
    }

    // Fetch the sheet content as CSV
    const sheetUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;
    const response = await axios.get(sheetUrl, { responseType: 'stream' });

    // Generate a unique filename for the CSV
    const filename = `${Date.now()}-sheet-${sheetId}.csv`;
    const filePath = path.join(__dirname, '../uploads', filename);

    // Save the CSV file to the uploads folder
    const writer = fs.createWriteStream(filePath);
    response.data.pipe(writer);

    // Handle stream events to check for successful file write
    writer.on('finish', () => {
      console.log(`Google Sheet saved to: ${filePath}`);
      res.status(200).json({ message: 'Google Sheet saved successfully', filePath });
    });
    writer.on('error', (err) => {
      console.error('Error saving Google Sheet:', err);
      res.status(500).json({ message: 'Failed to save Google Sheet' });
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to process Google Sheet' });
  }
};

module.exports = { downloadGoogleSheet };
