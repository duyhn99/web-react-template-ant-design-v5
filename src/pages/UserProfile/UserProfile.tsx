import PageContainer from '@/components/container/PageContainer';
import ProfileBanner from '@/components/userProfile/profile/ProfileBanner';
import ProfileInfo from '@/components/userProfile/profile/ProfileInfo';
import { Col, Row } from 'antd';

const UserProfile = () => {
  return (
    <PageContainer title='Profile' description='this is Profile'>
      <Row gutter={[0, 24]}>
        <Col span={24}>
          <ProfileBanner />
        </Col>
        <Col span={24}>
          <ProfileInfo />
        </Col>
      </Row>
    </PageContainer>
  );
};

export default UserProfile;
