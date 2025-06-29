import progileBg from '@/assets/images/backgrounds/profilebg.jpg';
import user2 from '@/assets/images/profile/user-2.jpg';
import { BORDER_RADIUS, FONT_WEIGHT } from '@/constants/constants';
import { Avatar, Card, Col, Flex, Image, Row, Space, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';
import ProfileTab from './ProfileTab';

const { Title, Text } = Typography;

const ProfileImageWrapper = styled.div`
  background-image: linear-gradient(#50b2fc, #f44c66);
  border-radius: 50%;
  width: 110px;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfileBanner: React.FC = () => {
  return (
    <Card styles={{ body: { padding: 0, borderRadius: BORDER_RADIUS, overflow: 'hidden' } }}>
      <Image src={progileBg} alt='profilecover' preview={false} />
      <Row justify='center'>
        {/* Stats Section */}
        <Col span={8}></Col>

        {/* Profile Image & Info */}
        <Col span={8}>
          <Flex justify='center' style={{ marginTop: -65 }}>
            <Space direction='vertical' align='center'>
              <ProfileImageWrapper>
                <Avatar src={user2} size={100} style={{ border: '4px solid #fff' }} />
              </ProfileImageWrapper>
              <Title level={4}>Julia Roberts</Title>
              <Text style={{ fontWeight: FONT_WEIGHT.light }}>Project Manager</Text>
            </Space>
          </Flex>
        </Col>

        {/* Socials & Button */}
        <Col span={8}></Col>
        <Col span={24}>
          {/* Tabs */}
          <ProfileTab />
        </Col>
      </Row>
    </Card>
  );
};

export default ProfileBanner;
