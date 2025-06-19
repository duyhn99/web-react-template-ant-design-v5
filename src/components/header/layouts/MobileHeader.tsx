import React from 'react';
import * as S from '../Header.styles';
import { Col, Row } from 'antd';
import { Notifications } from '@/components/layouts/MainLayout/MainHeader/Notifications/Notifications';

interface MobileHeaderProps {
  toggleSider: () => void;
  isSiderOpened: boolean;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ toggleSider, isSiderOpened }) => {
  return (
    <Row justify='space-between' align='middle'>
      <Col>{/* <ProfileDropdown /> */}</Col>

      <Col>
        <Row align='middle'>
          <Col>
            <Notifications />
          </Col>

          <Col></Col>

          <Col></Col>
        </Row>
      </Col>

      <S.BurgerCol>
        <S.MobileBurger onClick={toggleSider} />
      </S.BurgerCol>
    </Row>
  );
};
