import DashboardCard from '@/components/shared/DashboardCard';
import { COLORS } from '@/constants/constants';
import { ChartWrapper } from '@/styles/GlobalStyles';
import { Col, Row, Space, Spin, Typography } from 'antd';
import { CategoryScale, Chart as ChartJS, Filler, LinearScale, LineElement, PointElement, Tooltip } from 'chart.js';
import { AreaChart } from 'lucide-react';
import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Filler, Tooltip);

const { Title, Text } = Typography;

const AvatarBox = styled.div<{ bg: string; color: string; size?: number; radius?: string }>`
  background-color: ${({ bg }) => bg};
  color: ${({ color }) => color};
  width: ${({ size }) => size || 40}px;
  height: ${({ size }) => size || 40}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ radius }) => radius || '8px'};
  font-weight: 600;
`;

interface WeeklyCardProps {
  isLoading: boolean;
}

const WeeklyStats: React.FC<WeeklyCardProps> = ({ isLoading }) => {
  const primary = COLORS[500];
  const primaryLight = COLORS[50];
  const secondary = '#52C41A';
  const secondaryLight = '#F6FFED';
  const error = '#FA541C';
  const errorLight = '#FFF2E8';

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        data: [5, 15, 5, 10, 5],
        fill: true,
        backgroundColor: COLORS[50],
        borderColor: primary,
        tension: 0.4,
        pointRadius: 0
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { intersect: false, mode: 'index' as const }
    },
    scales: {
      x: { display: false, grid: { display: false } },
      y: { display: false, grid: { display: false } }
    }
  };

  const stats = [
    {
      title: 'Top Sales',
      subtitle: 'Johnathan Doe',
      percent: '68',
      color: primary,
      light: primaryLight
    },
    {
      title: 'Best Seller',
      subtitle: 'Footware',
      percent: '45',
      color: secondary,
      light: secondaryLight
    },
    {
      title: 'Most Commented',
      subtitle: 'Fashionware',
      percent: '14',
      color: error,
      light: errorLight
    }
  ];

  return isLoading ? (
    <Spin />
  ) : (
    <DashboardCard title='Weekly Stats' subtitle='Average sales'>
      <>
        <ChartWrapper height='130px' style={{ marginBottom: 24 }}>
          <Line data={chartData} options={chartOptions} />
        </ChartWrapper>

        <Space direction='vertical' size='large' style={{ marginTop: 24 }} className='w-full'>
          {stats.map((stat, index) => (
            <Row key={index} justify='space-between' align='middle'>
              <Col>
                <Space align='center'>
                  <AvatarBox bg={stat.light} color={stat.color}>
                    <AreaChart size={18} />
                  </AvatarBox>
                  <div>
                    <Title level={5} style={{ marginBottom: 4 }}>
                      {stat.title}
                    </Title>
                    <Text type='secondary'>{stat.subtitle}</Text>
                  </div>
                </Space>
              </Col>
              <Col>
                <AvatarBox bg={stat.light} color={stat.color} size={42} radius='4px'>
                  +{stat.percent}
                </AvatarBox>
              </Col>
            </Row>
          ))}
        </Space>
      </>
    </DashboardCard>
  );
};

export default WeeklyStats;
