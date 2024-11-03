import React from 'react'
import { Upload,BarChart,FileSpreadsheet } from 'lucide-react';
const Features = () => (
  <div id="features" className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose ChartMaker?</h2>
        <p className="text-xl text-gray-600">Transform your data without the complexity</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <Upload className="h-10 w-10 text-blue-500" />,
            title: "Easy Upload",
            description: "Drag and drop your files or connect Google Sheets directly. We support CSV, Excel, and more."
          },
          {
            icon: <BarChart className="h-10 w-10 text-blue-500" />,
            title: "Instant Visualization",
            description: "Get beautiful charts instantly. Choose from multiple chart types to best represent your data."
          },
          {
            icon: <FileSpreadsheet className="h-10 w-10 text-blue-500" />,
            title: "Multiple Formats",
            description: "Export your charts in various formats including PNG, SVG, and interactive HTML."
          }
        ].map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);
export default Features