import React, { useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart3, Download } from 'lucide-react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useLocation } from 'react-router-dom';
import { toPng } from 'html-to-image';

const DataVisualizationPage = () => {
    const location = useLocation();
    const graphData = location.state?.graphData;
    const chartRef = useRef(null);

    if (!graphData || !graphData.data) {
        return null;
    }

    const { type, data } = graphData;
  
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
                        <div className="flex justify-end mb-4">
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
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={chartData}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis
                                            dataKey="name"
                                            tick={{ fill: '#4B5563' }}
                                            tickLine={{ stroke: '#4B5563' }}
                                        />
                                        <YAxis
                                            tick={{ fill: '#4B5563' }}
                                            tickLine={{ stroke: '#4B5563' }}
                                        />
                                        <Tooltip
                                            contentStyle={{
                                                backgroundColor: '#fff',
                                                border: '1px solid #e5e7eb',
                                                borderRadius: '0.5rem'
                                            }}
                                        />
                                        <Bar
                                            dataKey="value"
                                            fill="#3B82F6"
                                            radius={[4, 4, 0, 0]}
                                        />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-xl font-semibold mb-4">Data Summary</h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Label
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Value
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {chartData.map((item, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {item.name}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                {item.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DataVisualizationPage;