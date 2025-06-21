import { Header } from '@/components/header/Header';
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import MainContent from './MainContent/MainContent';
import { MainHeader } from './MainHeader/MainHeader';
import * as S from './MainLayout.styles';
import MainSider from './MainSider/MainSider';

const MainLayout: React.FC = () => {
  const [siderCollapsed, setSiderCollapsed] = useState(true);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  return (
    <S.LayoutMaster>
      <MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
      <S.LayoutMain>
        <MainHeader>
          <Header toggleSider={toggleSider} isSiderOpened={!siderCollapsed} />
        </MainHeader>
        <MainContent id='main-content'>
          <div>
            <Outlet />
          </div>
        </MainContent>
      </S.LayoutMain>
    </S.LayoutMaster>
  );
};

export default MainLayout;
