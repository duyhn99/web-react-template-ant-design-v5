import user1 from '@/assets/images/profile/user-1.jpg';
import { COLORS } from '@/constants/constants';
import { ROUTE } from '@/constants/routes';
import { profile } from '@/data/data';
import { Avatar, Button, Col, Divider, Flex, Image, Row, Space, Typography } from 'antd';
import { Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProfileOverlayWrapper = styled.div`
  width: 360px;
  padding: 20px;
`;

const ImageWarpper = styled.div`
  width: 45px;
  height: 45px;
  background-color: #e6f7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

const ItemLink = styled(Link)`
  display: block;
  &:hover h5 {
    color: ${COLORS[500]};
  }
`;

const LogoutButton = styled(Button)`
  &:hover {
    background-color: ${COLORS[500]} !important;
    color: white !important;
  }
`;

const { Text, Title } = Typography;

const ProfileOverlay = () => {
  const { t } = useTranslation();

  return (
    <ProfileOverlayWrapper>
      <Row gutter={[0, 24]}>
        <Col span={24}>
          <Title level={4}>{t('user.profile')}</Title>
        </Col>
        <Col span={24}>
          <Flex gap='middle' align='center'>
            <Avatar src={user1} size={95} />
            <div>
              <Text strong>Mathew Anderson</Text>
              <br />
              <Text>Designer</Text>
              <br />
              <Text className='flex items-center'>
                <Mail size={14} style={{ marginRight: 4 }} />
                info@modernize.com
              </Text>
            </div>
          </Flex>
          <Divider size='small' style={{ marginTop: '16px' }} />
        </Col>
        <Col span={24}>
          <Space direction='vertical' size={32} className='w-full'>
            {profile.map((item) => (
              <ItemLink to={item.href} key={item.title}>
                <Flex gap='middle'>
                  <ImageWarpper>
                    <Image src={item.icon} preview={false}></Image>
                  </ImageWarpper>
                  <div>
                    <Title level={5}>{item.title}</Title>
                    <Text>{item.subtitle}</Text>
                  </div>
                </Flex>
              </ItemLink>
            ))}
          </Space>
        </Col>
        <Col span={24}>
          <Link to={ROUTE.LOGIN}>
            <LogoutButton variant='outlined' color='blue' block>
              Logout
            </LogoutButton>
          </Link>
        </Col>
      </Row>
    </ProfileOverlayWrapper>
  );
};

export default ProfileOverlay;
