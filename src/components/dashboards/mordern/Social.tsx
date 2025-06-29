import user1 from '@/assets/images/profile/user-1.jpg';
import user2 from '@/assets/images/profile/user-2.jpg';
import user3 from '@/assets/images/profile/user-3.jpg';
import user4 from '@/assets/images/profile/user-4.jpg';
import { Avatar, Col, Row, Space, Typography } from 'antd';
import { MessageCircle } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import DashboardCard from '../../shared/DashboardCard';

const { Title, Text } = Typography;

const StyledAvatar = styled(Avatar)<{ size?: number }>`
  border-radius: 8px;
  width: ${({ size }) => size || 70}px;
  height: ${({ size }) => size || 70}px;
`;

const IconBox = styled.div`
  width: 40px;
  height: 40px;
  background-color: #e6f7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

const Social: React.FC = () => {
  return (
    <DashboardCard>
      <>
        <Space direction='horizontal' size='large'>
          <StyledAvatar src={user1} />
          <div>
            <Title level={5} style={{ margin: 0 }}>
              Super awesome, Vue coming soon!
            </Title>
            <Text type='secondary'>22 March, 2023</Text>
          </div>
        </Space>

        <Row justify='space-between' align='middle' style={{ marginTop: 40 }}>
          <Col>
            <Avatar.Group max={{ count: 4 }}>
              <Avatar src={user1} />
              <Avatar src={user2} />
              <Avatar src={user3} />
              <Avatar src={user4} />
            </Avatar.Group>
          </Col>
          <Col>
            <Link to='/'>
              <IconBox>
                <MessageCircle size={20} color='#1890FF' />
              </IconBox>
            </Link>
          </Col>
        </Row>
      </>
    </DashboardCard>
  );
};

export default Social;
