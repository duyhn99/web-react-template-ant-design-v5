import DashboardCard from '@/components/shared/DashboardCard';
import { COLORS } from '@/constants/constants';
import { AvatarMini, ChartWrapper } from '@/styles/GlobalStyles';
import { Flex, Spin, Typography } from 'antd';
import { CategoryScale, Chart as ChartJS, Filler, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { ArrowDownRight } from 'lucide-react';
import React from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Filler, Tooltip);

const { Title, Text } = Typography;

interface CustomersCardProps {
  isLoading: boolean;
}

const Customers: React.FC<CustomersCardProps> = ({ isLoading }) => {
  const secondary = COLORS.secondray;
  const secondaryLight = 'rgba(183, 135, 255, 0.1)';
  const error = '#FA896B';

  const data = {
    labels: ['', '', '', '', '', ''],
    datasets: [
      {
        data: [30, 25, 35, 20, 30, 40],
        fill: true,
        backgroundColor: secondaryLight,
        borderColor: secondary,
        tension: 0.4,
        pointRadius: 0
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index' as const,
        intersect: false
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
    <DashboardCard
      footer={
        <ChartWrapper height='86px'>
          <Line data={data} options={options} />
        </ChartWrapper>
      }
    >
      <>
        <Text type='secondary'>Customers</Text>
        <Title level={4} style={{ margin: 0 }}>
          36,358
        </Title>
        <Flex>
          <AvatarMini>
            <ArrowDownRight size={18} color={error} />
          </AvatarMini>
          <Text strong>&nbsp; +9%</Text>
        </Flex>
      </>
    </DashboardCard>
  );
};

export default Customers;
