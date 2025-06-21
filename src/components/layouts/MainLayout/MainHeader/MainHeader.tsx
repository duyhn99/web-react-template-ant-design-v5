import React from 'react';
import * as S from './MainHeader.styles';
import { WithChildrenProps } from '@/types/generalTypes';
import { theme } from 'antd';

interface MainHeaderProps extends WithChildrenProps {}

export const MainHeader: React.FC<MainHeaderProps> = ({ children }) => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  return <S.Header $bgColor={colorBgContainer}>{children}</S.Header>;
};
