import { Button, Col, Layout, Row, theme } from 'antd';
import { AlignJustify } from 'lucide-react';
import React from 'react';
import { Notifications } from './Notifications/Notifications';

const { Header } = Layout;

interface MainHeaderProps {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

export const MainHeader: React.FC<MainHeaderProps> = ({ collapsed, setCollapsed }) => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    <Header style={{ padding: 12, background: colorBgContainer }}>
      <Row justify='space-between' align='middle'>
        <Col span={12}>
          <Button type='text' icon={<AlignJustify />} onClick={() => setCollapsed(!collapsed)} />
        </Col>
        <Col span={8}>
          <Notifications />
        </Col>
      </Row>
    </Header>
  );
};
