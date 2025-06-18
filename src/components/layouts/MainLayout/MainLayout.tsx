import { Layout } from 'antd';
import React, { useState } from 'react';
import { MainContent } from './MainContent/MainContent';
import { MainHeader } from './MainHeader/MainHeader';
import { MainSider } from './MainSider/MainSider';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <MainSider collapsed={collapsed} />
      <Layout>
        <MainHeader collapsed={collapsed} setCollapsed={setCollapsed} />
        <MainContent>{children}</MainContent>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
