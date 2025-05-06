import React, { useEffect, useRef } from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registrar os componentes necessários
Chart.register(CategoryScale, LinearScale, BarElement, BarController, Title, Tooltip, Legend);

interface HTMLCanvasElementWithChart extends HTMLCanvasElement {
  chart?: Chart;
}

const BarChart: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElementWithChart | null>(null);

  useEffect(() => {
    // Destruir gráfico anterior, se houver
    if (canvasRef.current?.chart) {
      canvasRef.current.chart.destroy();
    }

    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      if (ctx) {
        const chart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            datasets: [
              {
                label: 'Sua atividade na semana',
                data: [12, 19, 3, 5, 2, 3, 20],
                backgroundColor: [
                  '#00C950',
                ],
                borderColor: '#1f2937', // gray-800
                borderWidth: 1,
                borderRadius: 20,
                barThickness: 15
              }
            ]
          },
          
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              tooltip: {
                backgroundColor: '#1f2937', 
                titleColor: '#FF6900',      
                bodyColor: '#ffffff',
                borderColor: '#e5e7eb',     
                borderWidth: 1,
                cornerRadius: 10,
                padding: 12,
                callbacks: {
                  title: (tooltipItems) => ` ${tooltipItems[0].label}`,
                  label: (context) => `Pontos: ${context.raw}`
                }
              },
              legend: {
                labels: {
                  color: '#374151', // gray-700
                  font: {
                    weight: 'bold'
                  }
                }
              }
            },
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  color: '#6b7280' // gray-500
                },
                grid: {
                  color: '#e5e7eb' // gray-200
                }
              },
              x: {
                ticks: {
                  color: '#6b7280'
                },
                grid: {
                  display: false
                }
              }
            }
          }
        });

        canvasRef.current.chart = chart;
      }
    }

    return () => {
      if (canvasRef.current?.chart) {
        canvasRef.current.chart.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default BarChart;