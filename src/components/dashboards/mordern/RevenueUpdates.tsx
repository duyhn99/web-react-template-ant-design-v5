import { COLORS } from '@/constants/constants';
import { Button, Col, Row, Select, Spin, Typography } from 'antd';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Title as ChartTitle,
  Legend,
  LinearScale,
  Tooltip
} from 'chart.js';
import { Grip } from 'lucide-react';
import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import DashboardCard from '../../shared/DashboardCard';
import { ChartWrapper } from '@/styles/GlobalStyles';

// Đăng ký ChartJS components
ChartJS.register(CategoryScale, LinearScale, BarElement, ChartTitle, Tooltip, Legend);

const { Title, Text } = Typography;
const { Option } = Select;

interface RevenueUpdatesTwoCardProps {
  isLoading: boolean;
}

const IconBox = styled.div<{ $bg?: string }>`
  width: 40px;
  height: 40px;
  background-color: ${({ $bg }) => $bg || '#e6f7ff'};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

const Dot = styled.div<{ color: string }>`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-top: 6px;
`;

const RevenueUpdates: React.FC<RevenueUpdatesTwoCardProps> = ({ isLoading }) => {
  const [month, setMonth] = useState('1');

  const handleChange = (value: string) => {
    setMonth(value);
  };

  const primary = COLORS[500];
  const secondary = COLORS.secondray;

  const chartOptions = {
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
        stacked: true,
        grid: { display: false }
      },
      y: {
        stacked: true,
        min: -5,
        max: 5,
        ticks: { stepSize: 2.5 }
      }
    }
  };

  const chartData = {
    labels: ['16/08', '17/08', '18/08', '19/08', '20/08', '21/08', '22/08'],
    datasets: [
      {
        label: 'Earnings this month',
        data: [1.5, 2.7, 2.2, 3.6, 1.5, 1.0, 0],
        backgroundColor: primary,
        borderRadius: 6,
        barPercentage: 0.6,
        categoryPercentage: 0.5
      },
      {
        label: 'Expense this month',
        data: [-1.8, -1.1, -2.5, -1.5, -0.6, -1.8, 0],
        backgroundColor: secondary,
        borderRadius: 6,
        barPercentage: 0.6,
        categoryPercentage: 0.5
      }
    ]
  };

  return isLoading ? (
    <Spin />
  ) : (
    <DashboardCard
      title='Revenue Updates'
      subtitle='Overview of Profit'
      action={
        <Select value={month} size='small' onChange={handleChange}>
          <Option value='1'>March 2023</Option>
          <Option value='2'>April 2023</Option>
          <Option value='3'>May 2023</Option>
        </Select>
      }
    >
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={16}>
          <ChartWrapper height='374px'>
            <Bar data={chartData} options={chartOptions} />
          </ChartWrapper>
        </Col>
        <Col xs={24} sm={8}>
          <Row align='middle' gutter={16} style={{ marginTop: 24 }}>
            <Col>
              <IconBox $bg='#e6f7ff'>
                <Grip size={24} color={primary} />
              </IconBox>
            </Col>
            <Col>
              <Title level={3} style={{ margin: 0 }}>
                $63,489.50
              </Title>
              <Text type='secondary'>Total Earnings</Text>
            </Col>
          </Row>

          <div style={{ margin: '40px 0' }}>
            <Row align='middle' gutter={16} style={{ marginBottom: 24 }}>
              <Col>
                <Dot color={primary} />
              </Col>
              <Col>
                <Text type='secondary'>Earnings this month</Text>
                <Title level={5}>$48,820</Title>
              </Col>
            </Row>
            <Row align='middle' gutter={16}>
              <Col>
                <Dot color={secondary} />
              </Col>
              <Col>
                <Text type='secondary'>Expense this month</Text>
                <Title level={5}>$26,498</Title>
              </Col>
            </Row>
          </div>
          <Button type='primary' block>
            View Full Report
          </Button>
        </Col>
      </Row>
    </DashboardCard>
  );
};

export default RevenueUpdates;
