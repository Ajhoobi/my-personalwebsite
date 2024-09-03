import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

const RadarChart = ({ data, labels, title }) => {
  // Ensure data values are out of 100
  const normalizedData = data.map(value => Math.min(Math.max(value, 0), 100));

  // Radar chart data
  const radarData = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: data,
        backgroundColor: 'rgba(186, 17, 104, 0.2)', // No background fill for the dataset
        borderColor: 'white', // Line color set to white
        borderWidth: 2,
        pointBackgroundColor: 'white', // Color of the points
      },
    ],
  };

  // Radar chart options
  const options = {
    responsive: true,  // Makes the chart responsive
    maintainAspectRatio: true,  // Allows control over the aspect ratio
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.5)',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)',
        },
        pointLabels: {
          color: 'white',
        },
        ticks: {
          display: false,
        
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',
        },
      },
    },
  };

  return (
    <div className="w-full max-w-lg h-full">
      <Radar data={radarData} options={options} />
    </div>
  );
};

export default RadarChart;