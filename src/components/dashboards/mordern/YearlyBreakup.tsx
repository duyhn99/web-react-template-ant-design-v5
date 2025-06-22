import { Avatar, Col, Row, Spin, Typography } from 'antd';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import styled from 'styled-components';
import { ChartWrapper } from '@/styles/GlobalStyles';
import { MoveUpLeft } from 'lucide-react';
import DashboardCard from '../../shared/DashboardCard';
import { COLORS } from '@/constants/constants';

// Đăng ký thành phần của Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const { Title, Text } = Typography;

interface YearlyBreakupCardProps {
  isLoading: boolean;
}

const Dot = styled.div<{ color: string }>`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  margin-top: 6px;
`;

const YearlyBreakup: React.FC<YearlyBreakupCardProps> = ({ isLoading }) => {
  const primary = COLORS[500];
  const primaryLight = COLORS[100];
  const neutral = '#F9F9FD';
  const success = '#39B69A';
  const successLight = '#E6FFFB';

  const chartData = {
    labels: ['2023 A', '2023 B', 'Other'],
    datasets: [
      {
        data: [38, 40, 25],
        backgroundColor: [primary, primaryLight, neutral],
        borderWidth: 0
      }
    ]
  };

  const chartOptions = {
    cutout: '75%',
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: any) => `${context.label}: ${context.raw}%`
        }
      }
    }
  };

  return isLoading ? (
    <Spin />
  ) : (
    <DashboardCard title='Yearly Breakup'>
      <Row gutter={[24, 24]} align='middle'>
        {/* Left Side */}
        <Col xs={24} sm={14}>
          <Title level={3} style={{ marginBottom: 0 }}>
            $36,358
          </Title>

          <Row align='middle' gutter={8} style={{ marginTop: 8 }}>
            <Col>
              <Avatar
                size={27}
                style={{
                  backgroundColor: successLight
                }}
              >
                <MoveUpLeft size={20} color={success} />
              </Avatar>
            </Col>
            <Col>
              <Text strong>+9%</Text>
              <Text type='secondary' style={{ marginLeft: 4 }}>
                last year
              </Text>
            </Col>
          </Row>

          <Row gutter={16} style={{ marginTop: 32 }}>
            <Col>
              <Row align='middle' gutter={8}>
                <Col>
                  <Dot color={primary} />
                </Col>
                <Col>
                  <Text type='secondary'>2023 A</Text>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row align='middle' gutter={8}>
                <Col>
                  <Dot color={primaryLight} />
                </Col>
                <Col>
                  <Text type='secondary'>2023 B</Text>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        {/* Right Side - Doughnut Chart */}
        <Col xs={24} sm={10}>
          <ChartWrapper height='125px'>
            <Doughnut data={chartData} options={chartOptions} />
          </ChartWrapper>
        </Col>
      </Row>
    </DashboardCard>
  );
};

export default YearlyBreakup;
