import DashboardCard from '@/components/shared/DashboardCard';
import { COLORS } from '@/constants/constants';
import { AvatarMini, ChartWrapper } from '@/styles/GlobalStyles';
import { Flex, Spin, Typography } from 'antd';
import { BarElement, CategoryScale, Chart as ChartJS, LinearScale, Tooltip } from 'chart.js';
import { ArrowUpLeft } from 'lucide-react';
import React from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const { Title, Text } = Typography;

interface ProjectCardProps {
  isLoading: boolean;
}

const Projects: React.FC<ProjectCardProps> = ({ isLoading }) => {
  const primary = COLORS['500'];
  const success = '#39B69A';

  const chartData = {
    labels: Array.from({ length: 9 }, (_, i) => `Day ${i + 1}`),
    datasets: [
      {
        data: [4, 10, 9, 7, 9, 10, 11, 8, 10],
        backgroundColor: primary,
        borderRadius: 3,
        barPercentage: 0.6,
        categoryPercentage: 0.5
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx: any) => `${ctx.raw}`
        }
      }
    },
    scales: {
      x: {
        display: false,
        grid: { display: false }
      },
      y: {
        display: false,
        grid: { display: false }
      }
    }
  };

  return isLoading ? (
    <Spin />
  ) : (
    <DashboardCard>
      <>
        <Text type='secondary'>Projects</Text>
        <Title level={4} style={{ margin: 0 }}>
          78,298
        </Title>
        <Flex>
          <AvatarMini>
            <ArrowUpLeft size={18} color={success} />
          </AvatarMini>
          <Text strong>&nbsp; +9%</Text>
        </Flex>
        <ChartWrapper height='86px'>
          <Bar data={chartData} options={chartOptions} />
        </ChartWrapper>
      </>
    </DashboardCard>
  );
};

export default Projects;
