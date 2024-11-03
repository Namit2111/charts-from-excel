import React from 'react'
import { ArrowRight } from 'lucide-react';
const HowItWorks = () => (
  <div id="how-it-works" className="py-20 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
        <p className="text-xl text-gray-600">Three simple steps to transform your data</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            step: "1",
            title: "Upload Your Data",
            description: "Upload your spreadsheet or connect your Google Sheet"
          },
          {
            step: "2",
            title: "Choose Chart Type",
            description: "Select from various chart types that best fit your data"
          },
          {
            step: "3",
            title: "Download or Share",
            description: "Export your chart or get a shareable link"
          }
        ].map((step, index) => (
          <div key={index} className="relative">
            <div className="bg-white rounded-lg p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
            {index < 2 && (
              <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                <ArrowRight className="h-6 w-6 text-gray-400" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);


export default HowItWorks