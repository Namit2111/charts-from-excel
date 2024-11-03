import React from 'react'
import { BarChart } from 'lucide-react';
const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center text-white mb-4">
            <BarChart className="h-6 w-6" />
            <span className="ml-2 text-lg font-bold">ChartMaker</span>
          </div>
          <p className="text-sm">Transform your data into beautiful visualizations with just a few clicks.</p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Product</h3>
          <ul className="space-y-2">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#examples" className="hover:text-white">Examples</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="#docs" className="hover:text-white">Documentation</a></li>
            <li><a href="#api" className="hover:text-white">API</a></li>
            <li><a href="#support" className="hover:text-white">Support</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2024 ChartMaker. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#twitter" className="hover:text-white">Twitter</a>
          <a href="#github" className="hover:text-white">GitHub</a>
          <a href="#linkedin" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer