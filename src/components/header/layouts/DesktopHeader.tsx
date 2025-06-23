import React from 'react';

import { Notifications } from '@/components/layouts/MainLayout/MainHeader/Notifications/Notifications';
import { Col, Flex, Row } from 'antd';
import * as S from '../Header.styles';
import { useResponsive } from '@/hooks/useResponsive';
import Profile from '../profile/Profile';

interface DesktopHeaderProps {
  toggleSider: () => void;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ toggleSider }) => {
  const { isDesktop } = useResponsive();
  const leftSide = (
    <Col xl={16} xxl={17}>
      <Row justify='space-between'>
        <Col xl={15} xxl={12}>
          {isDesktop && <S.MobileBurger onClick={toggleSider} />}
        </Col>
      </Row>
    </Col>
  );

  return (
    <Row justify='space-between' align='middle' className='h-full'>
      {leftSide}
      <Flex gap='small' align='center' className='h-full'>
        <Notifications />
        <Profile />
      </Flex>
    </Row>
  );
};
