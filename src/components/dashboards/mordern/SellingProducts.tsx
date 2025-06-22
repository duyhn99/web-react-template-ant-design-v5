import SavingsImg from '@/assets/images/backgrounds/piggy.png';
import { COLORS } from '@/constants/constants';
import { Button, Card, Col, Image, Progress, Row, Space, Typography } from 'antd';
import styled from 'styled-components';

const { Title, Text } = Typography;

const sells = [
  {
    product: 'MaterialPro',
    price: '23,568',
    percent: 55,
    color: 'blue'
  },
  {
    product: 'Flexy Admin',
    price: '23,568',
    percent: 20,
    color: 'purple'
  }
];

const BackgroundCard = styled.div`
  background-color: ${COLORS[500]};
  color: white;
  border-radius: 8px;
  padding: 16px;
`;

const OverlayCard = styled(Card)`
  position: relative;
  z-index: 1;
`;

const ImageWrapper = styled.div`
  text-align: center;
  margin-top: 16px;
  margin-bottom: -40px;
`;

const SellingProducts = () => {
  return (
    <BackgroundCard>
      <Space size={0} direction='vertical' style={{ padding: '0 16px' }}>
        <Title level={5} style={{ color: 'white', marginTop: 0 }}>
          Best selling products
        </Title>
        <Text style={{ color: 'white' }}>Overview 2023</Text>
      </Space>
      <ImageWrapper>
        <Image preview={false} src={SavingsImg} alt='Savings' width={300} />
      </ImageWrapper>
      <OverlayCard variant='borderless' styles={{ body: { padding: '12px' } }}>
        <Space direction='vertical' size={12} className='w-full'>
          {sells.map((item, index) => (
            <div key={index}>
              <Row justify='space-between' align='middle' style={{ marginBottom: 8 }}>
                <Col>
                  <Text strong>{item.product}</Text>
                  <br />
                  <Text type='secondary'>${item.price}</Text>
                </Col>
                <Col>
                  <Button variant='filled' color={item.color as any} size='small'>
                    {item.percent}%
                  </Button>
                </Col>
              </Row>
              <Progress percent={item.percent} showInfo={false} strokeColor={item.color} />
            </div>
          ))}
        </Space>
      </OverlayCard>
    </BackgroundCard>
  );
};

export default SellingProducts;
