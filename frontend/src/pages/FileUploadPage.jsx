import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, FileSpreadsheet, Link, Loader2 } from 'lucide-react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const FileUploadPage = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sheetUrl, setSheetUrl] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setError('');
    }
  };

  const uploadFile = async () => {
    if (!file) {
      setError('Please select a file to upload');
      return;
    }

    setLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();

        // console.log('Graph Data:', data.graphData);
        setFile(null);
        setSheetUrl('');
        // alert('File uploaded successfully!');
        navigate('/visualization', { state: { graphData: data.graphData } });
      } else {
        setError('Failed to process file');
      }
    } catch (err) {
      setError('Error uploading file');
    } finally {
      setLoading(false);
    }
  };

  const handleSheetUrlSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch(import.meta.env.VITE_BACKEND_URL + '/api/sheets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: sheetUrl }),
      });

      if (response.ok) {
        setSheetUrl('');
        setFile(null);
        alert('Sheet processed successfully!');
      } else {
        setError('Failed to process Google Sheet');
      }
    } catch (err) {
      setError('Error processing Google Sheet');
    } finally {
      setLoading(false);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('border-blue-400');
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('border-blue-400');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('border-blue-400');

    const droppedFile = e.dataTransfer.files[0];
    if (
      droppedFile &&
      (droppedFile.type === 'text/csv' ||
        droppedFile.type === 'application/vnd.ms-excel' ||
        droppedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    ) {
      setFile(droppedFile);
      setError('');
    } else {
      setError('Please upload a CSV or Excel file');
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
        <div className="max-w-2xl w-full mt-20">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <Upload className="w-16 h-16 text-blue-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-3">Data Upload</h1>
            <p className="text-gray-600">Upload your data file or connect a Google Sheet</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            {/* File Upload Section */}
            <div
              className="border-2 border-dashed border-blue-200 rounded-lg p-8 mb-6 transition-all duration-200"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <div className="text-center">
                <FileSpreadsheet className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h2 className="text-xl font-semibold mb-2">Upload Your File</h2>
                <p className="text-gray-500 mb-4">Drag & drop your file here or click to browse</p>
                <input
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileChange}
                  className="hidden"
                  id="fileInput"
                />
                <label
                  htmlFor="fileInput"
                  className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 cursor-pointer inline-block transition-colors"
                >
                  Choose File
                </label>
                {file && (
                  <div className="mt-4 text-sm text-gray-600 flex items-center justify-center">
                    <FileSpreadsheet className="w-4 h-4 mr-2" />
                    {file.name}
                  </div>
                )}
              </div>
            </div>

            {file && (
              <button
                onClick={uploadFile}
                className="w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  'Upload'
                )}
              </button>
            )}

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">OR</span>
              </div>
            </div>

            {/* Google Sheets Section */}
            <div className="mb-6">
              <div className="text-center mb-4">
                <Link className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h2 className="text-lg font-semibold">Connect Google Sheet</h2>
              </div>
              <form onSubmit={handleSheetUrlSubmit} className="space-y-4">
                <input
                  type="url"
                  value={sheetUrl}
                  onChange={(e) => setSheetUrl(e.target.value)}
                  placeholder="Paste your Google Sheet URL here"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    'Import Sheet'
                  )}
                </button>
              </form>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mt-4 text-center text-red-500 bg-red-50 p-3 rounded-md">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FileUploadPage;