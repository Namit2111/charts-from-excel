import React from 'react'
import { BarChart } from 'lucide-react';
const Navbar = () => (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <BarChart className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold text-gray-800">ChartMaker</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-500">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-500">How it Works</a>
            <a href="#examples" className="text-gray-600 hover:text-blue-500">Examples</a>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
  

export default Navbar