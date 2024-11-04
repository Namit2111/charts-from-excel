import React from 'react'
import { ArrowRight,PieChart,BarChart,LineChart,Upload } from 'lucide-react';
import { Link } from 'react-router-dom';
const Hero = () => (
    <div className="pt-24 pb-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transform Your Data into 
              <span className="text-blue-500"> Beautiful Charts</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Upload your spreadsheet and instantly create stunning visualizations. 
              No coding required. Perfect for presentations, reports, and quick data analysis.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/upload" className="inline-block">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 flex items-center">
                Start Converting
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              </Link>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50">
                View Examples
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-6 relative z-10">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4 flex items-center">
                  <PieChart className="h-8 w-8 text-blue-500" />
                  <span className="ml-2 text-sm font-medium">Pie Charts</span>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 flex items-center">
                  <BarChart className="h-8 w-8 text-purple-500" />
                  <span className="ml-2 text-sm font-medium">Bar Charts</span>
                </div>
                <div className="bg-green-50 rounded-lg p-4 flex items-center">
                  <LineChart className="h-8 w-8 text-green-500" />
                  <span className="ml-2 text-sm font-medium">Line Charts</span>
                </div>
                <div className="bg-orange-50 rounded-lg p-4 flex items-center">
                  <Upload className="h-8 w-8 text-orange-500" />
                  <span className="ml-2 text-sm font-medium">Easy Upload</span>
                </div>
              </div>
            </div>
            <div className="absolute top-8 right-8 w-full h-full bg-blue-100 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );

export default Hero