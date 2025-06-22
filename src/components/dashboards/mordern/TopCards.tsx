import { Row, Col, Card, Typography, Image } from 'antd';
import icon1 from '@/assets/svgs/icon-connect.svg';
import icon2 from '@/assets/svgs/icon-user-male.svg';
import icon3 from '@/assets/svgs/icon-briefcase.svg';
import icon4 from '@/assets/svgs/icon-mailbox.svg';
import icon5 from '@/assets/svgs/icon-favorites.svg';
import icon6 from '@/assets/svgs/icon-speech-bubble.svg';
import { COLORS } from '@/constants/constants';

const { Title, Text } = Typography;

const topcards = [
  { icon: icon2, title: 'Employees', digits: '96', color: COLORS.blue },
  { icon: icon3, title: 'Clients', digits: '3,650', color: COLORS.gold },
  { icon: icon4, title: 'Projects', digits: '356', color: COLORS.purple },
  { icon: icon5, title: 'Events', digits: '696', color: COLORS.red },
  { icon: icon6, title: 'Payroll', digits: '$96k', color: COLORS.green },
  { icon: icon1, title: 'Reports', digits: '59', color: COLORS.cyan }
];

const TopCards = () => {
  return (
    <Row gutter={[16, 16]}>
      {topcards.map((item, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={4}>
          <Card
            variant='borderless'
            style={{ textAlign: 'center' }}
            styles={{
              body: {
                backgroundColor: `${item.color}1a`,
                borderRadius: 9
              }
            }}
          >
            <Image src={item.icon} alt={item.title} width={50} height={50} />
            <Text style={{ display: 'block', color: item.color, marginTop: 8, fontWeight: 600 }}>{item.title}</Text>
            <Title level={3} style={{ margin: 0, color: item.color }}>
              {item.digits}
            </Title>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TopCards;
