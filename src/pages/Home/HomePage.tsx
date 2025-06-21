import PageContainer from '@/components/container/PageContainer';
import { Button, Space } from 'antd';

const HomePage = () => {
  return (
    <PageContainer title='Home'>
      <Space direction='vertical' style={{ width: '100%' }}>
        <Button>Duy</Button>
      </Space>
    </PageContainer>
  );
};

export default HomePage;
