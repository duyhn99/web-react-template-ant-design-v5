import { Layout } from 'antd';
import React from 'react';

const { Content } = Layout;

interface MainContentProps {
  children: React.ReactNode;
}

export const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <Content>
      <div style={{ padding: 12, height: '100%' }}>{children}</div>
    </Content>
  );
};
