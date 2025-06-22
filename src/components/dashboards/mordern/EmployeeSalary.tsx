import DashboardWidgetCard from '@/components/shared/DashboardWidgetCard';
import { ChartWrapper } from '@/styles/GlobalStyles';
import { Spin } from 'antd';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Tooltip } from 'chart.js';
import { DollarSign, TrendingUp } from 'lucide-react';
import React from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface EmployeeSalaryCardProps {
  isLoading: boolean;
}

const EmployeeSalary: React.FC<EmployeeSalaryCardProps> = ({ isLoading }) => {
  const primary = '#1890FF'; // blue
  const primaryLight = '#E6F7FF'; // light blue

  const data = {
    labels: ['Apr', 'May', 'June', 'July', 'Aug', 'Sept'],
    datasets: [
      {
        data: [20, 15, 30, 25, 10, 15],
        backgroundColor: [primaryLight, primaryLight, primary, primaryLight, primaryLight, primaryLight],
        borderRadius: 4,
        barPercentage: 0.5,
        categoryPercentage: 0.6
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: any) => `$${context.raw}k`
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { font: { size: 12 } }
      },
      y: {
        display: false
      }
    }
  };

  return isLoading ? (
    <Spin />
  ) : (
    <DashboardWidgetCard
      title='Employee Salary'
      subtitle='Every month'
      dataLabel1={<>Salary</>}
      dataItem1='$36,358'
      dataLabel2={<>Profit</>}
      dataItem2='$5,296'
    >
      <ChartWrapper height='282px'>
        <Bar data={data} options={options} />
      </ChartWrapper>
    </DashboardWidgetCard>
  );
};

export default EmployeeSalary;
