import React from 'react';

import { Notifications } from '@/components/layouts/MainLayout/MainHeader/Notifications/Notifications';
import { Col, Row } from 'antd';
import * as S from '../Header.styles';
import { useResponsive } from '@/hooks/useResponsive';

interface DesktopHeaderProps {
  isTwoColumnsLayout: boolean;
  toggleSider: () => void;
}

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ isTwoColumnsLayout, toggleSider }) => {
  const { isDesktop } = useResponsive();
  const leftSide = (
    <S.SearchColumn xl={16} xxl={17}>
      <Row justify='space-between'>
        <Col xl={15} xxl={12}>
          {isDesktop && <S.MobileBurger onClick={toggleSider} />}
        </Col>
      </Row>
    </S.SearchColumn>
  );

  return (
    <Row justify='space-between' align='middle'>
      {leftSide}

      <S.ProfileColumn xl={8} xxl={7} $isTwoColumnsLayout={isTwoColumnsLayout}>
        <Row align='middle' justify='end' gutter={[5, 5]}>
          <Col>
            <Row gutter={[{ xxl: 5 }, { xxl: 5 }]}>
              <Col></Col>

              <Col>
                <Notifications />
              </Col>

              <Col></Col>
            </Row>
          </Col>

          <Col></Col>
        </Row>
      </S.ProfileColumn>
    </Row>
  );
};
