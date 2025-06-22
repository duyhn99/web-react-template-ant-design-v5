import { Avatar, Button, Spin, Typography } from 'antd';
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip
} from 'chart.js';
import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

import { DollarSign, MoveDownRight } from 'lucide-react';
import DashboardCard from '../../shared/DashboardCard';
import { COLORS } from '@/constants/constants';
import { ChartWrapper } from '@/styles/GlobalStyles';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Filler, Tooltip, Legend);

const { Title, Text } = Typography;

interface MonthlyEarningsCardProps {
  isLoading: boolean;
}

const DotAvatar = styled(Avatar)<{ bg?: string }>`
  background-color: ${({ bg }) => bg || '#ffe6e6'} !important;
  width: 27px;
  height: 27px;
`;

const MonthlyEarnings: React.FC<MonthlyEarningsCardProps> = ({ isLoading }) => {
  const errorLight = '#FFF1F0';
  const error = '#FA896B';
  const secondary = COLORS.secondray;

  const data = {
    labels: ['', '', '', '', '', '', ''],
    datasets: [
      {
        data: [25, 66, 20, 40, 12, 58, 20],
        fill: true,
        backgroundColor: 'rgba(211, 173, 247, 0.1)',
        borderColor: secondary,
        tension: 0.4
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
        display: false
      },
      y: {
        display: false
      }
    }
  };

  return isLoading ? (
    <Spin />
  ) : (
    <DashboardCard
      title='Monthly Earnings'
      action={
        <Button
          shape='circle'
          type='primary'
          size='middle'
          icon={<DollarSign size={20} />}
          style={{ backgroundColor: secondary }}
        />
      }
      footer={
        <ChartWrapper height='90px'>
          <Line data={data} options={options} />
        </ChartWrapper>
      }
    >
      <>
        <Title level={3} style={{ marginTop: -20, marginBottom: 8 }}>
          $6,820
        </Title>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <DotAvatar bg={errorLight} size={27} icon={<MoveDownRight size={18} color={error} />} />
          <Text strong>+9%</Text>
          <Text type='secondary'>last year</Text>
        </div>
      </>
    </DashboardCard>
  );
};

export default MonthlyEarnings;
