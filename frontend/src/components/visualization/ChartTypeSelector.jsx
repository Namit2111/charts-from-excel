import React from 'react';
import { BarChart3, PieChart } from 'lucide-react';

const ChartTypeSelector = ({ availableTypes, currentType, onTypeChange }) => {
  const chartIcons = {
    bar: BarChart3,
    pie: PieChart
  };

  return (
    <div className="flex gap-2 mb-4">
      {availableTypes.map((type) => {
        const Icon = chartIcons[type] || BarChart3;
        return (
          <button
            key={type}
            onClick={() => onTypeChange(type)}
            className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              currentType === type
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            <Icon className="w-4 h-4" />
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        );
      })}
    </div>
  );
};
export default ChartTypeSelector;