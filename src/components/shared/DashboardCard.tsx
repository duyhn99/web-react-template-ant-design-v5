import { Card, Col, Row, Typography } from 'antd';
import { JSX } from 'react';

type Props = {
  title?: string;
  subtitle?: string;
  action?: JSX.Element;
  footer?: JSX.Element;
  cardheading?: string | JSX.Element;
  headtitle?: string | JSX.Element;
  headsubtitle?: string | JSX.Element;
  children?: JSX.Element;
  middlecontent?: string | JSX.Element;
};

const DashboardCard = ({
  title,
  subtitle,
  children,
  action,
  footer,
  cardheading,
  headtitle,
  headsubtitle,
  middlecontent
}: Props) => {
  return (
    <Card styles={{ body: { padding: 0 } }} variant='borderless'>
      {cardheading ? (
        <Card.Meta
          title={
            <Typography.Title level={5} style={{ margin: 0 }}>
              {headtitle}
            </Typography.Title>
          }
          description={<Typography.Text type='secondary'>{headsubtitle}</Typography.Text>}
        />
      ) : (
        <div style={{ padding: 30 }}>
          {title && (
            <Row justify='space-between' align='middle' style={{ marginBottom: 24 }}>
              <Col>
                <Typography.Title level={5} style={{ margin: 0 }}>
                  {title}
                </Typography.Title>
                {subtitle && <Typography.Text type='secondary'>{subtitle}</Typography.Text>}
              </Col>
              {action && <Col>{action}</Col>}
            </Row>
          )}
          {children}
        </div>
      )}
      {middlecontent}
      {footer}
    </Card>
  );
};

export default DashboardCard;
