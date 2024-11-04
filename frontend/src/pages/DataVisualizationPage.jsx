import React, { useRef, useState } from 'react';
import { BarChart3, Download } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { toPng } from 'html-to-image';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ChartTypeSelector from '../components/visualization/ChartTypeSelector';
import DataChart from '../components/visualization/DataChart';
import DataSummaryTable from "../components/visualization/DataSummaryTable"

const DataVisualizationPage = () => {
  const location = useLocation();
  const graphData = location.state?.graphData;
  const chartRef = useRef(null);
  const [currentChartType, setCurrentChartType] = useState('bar');

  if (!graphData || !graphData.data) {
    return null;
  }

  const { type, data } = graphData;
  const availableChartTypes = Array.isArray(type) ? type : ['bar'];
  
  const chartData = data.labels.map((label, index) => ({
    name: label,
    value: data.values[index]
  }));

  const downloadPNG = async () => {
    if (chartRef.current) {
      try {
        const dataUrl = await toPng(chartRef.current, {
          quality: 1.0,
          backgroundColor: 'white',
        });
        
        const link = document.createElement('a');
        link.download = 'chart.png';
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error('Failed to download chart:', err);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
        <div className="max-w-6xl mx-auto mt-20">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <BarChart3 className="w-16 h-16 text-blue-500" />
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-3">Data Visualization</h1>
            <p className="text-gray-600">Interactive visualization of your uploaded data</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex justify-between items-center mb-4">
              <ChartTypeSelector
                availableTypes={availableChartTypes}
                currentType={currentChartType}
                onTypeChange={setCurrentChartType}
              />
              <button
                onClick={downloadPNG}
                className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                <Download className="w-4 h-4" />
                Download Chart
              </button>
            </div>

            <div ref={chartRef} className="bg-white p-4 rounded-lg">
              <div className="h-[400px] w-full">
                <DataChart type={currentChartType} data={chartData} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-semibold mb-4">Data Summary</h2>
            <DataSummaryTable data={chartData} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DataVisualizationPage;