import { Card, Col, Row, Typography } from 'antd';
import { Grip } from 'lucide-react';
import { JSX } from 'react';
import styled from 'styled-components';

const { Title, Text } = Typography;

type Props = {
  title: string;
  subtitle: string;
  dataLabel1: string | JSX.Element;
  dataItem1: string;
  dataLabel2: string | JSX.Element;
  dataItem2: string;
  children: JSX.Element;
};

const IconBox = styled.div<{ bg?: string }>`
  width: 38px;
  height: 38px;
  background-color: ${({ bg }) => bg || '#f5f5f5'};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
`;

const DashboardWidgetCard = ({ title, subtitle, children, dataLabel1, dataItem1, dataLabel2, dataItem2 }: Props) => {
  return (
    <Card>
      {title && (
        <div style={{ marginBottom: 8 }}>
          <Title level={5} style={{ margin: 0 }}>
            {title}
          </Title>
          <Text type='secondary'>{subtitle}</Text>
        </div>
      )}

      {children}

      <Row justify='space-between' style={{ marginTop: 24 }}>
        <Col>
          <Row align='middle' gutter={12}>
            <Col>
              <IconBox bg='#e6f7ff'>
                <Grip size={20} color='#1890FF' />
              </IconBox>
            </Col>
            <Col>
              <Text type='secondary'>{dataLabel1}</Text>
              <Title level={5} style={{ margin: 0 }}>
                {dataItem1}
              </Title>
            </Col>
          </Row>
        </Col>

        <Col>
          <Row align='middle' gutter={12}>
            <Col>
              <IconBox bg='#f5f5f5'>
                <Grip size={20} color='#8c8c8c' />
              </IconBox>
            </Col>
            <Col>
              <Text type='secondary'>{dataLabel2}</Text>
              <Title level={5} style={{ margin: 0 }}>
                {dataItem2}
              </Title>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default DashboardWidgetCard;
