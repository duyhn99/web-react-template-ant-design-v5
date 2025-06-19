import React from 'react';
import * as S from './MainHeader.styles';
import { WithChildrenProps } from '@/types/generalTypes';
import { theme } from 'antd';

interface MainHeaderProps extends WithChildrenProps {
  isTwoColumnsLayout: boolean;
}

export const MainHeader: React.FC<MainHeaderProps> = ({ isTwoColumnsLayout, children }) => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  return (
    <S.Header $bgColor={colorBgContainer} $isTwoColumnsLayoutHeader={isTwoColumnsLayout}>
      {children}
    </S.Header>
  );
};
