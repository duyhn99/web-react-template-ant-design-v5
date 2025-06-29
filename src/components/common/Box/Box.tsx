import { BORDER_RADIUS } from '@/constants/constants';
import React from 'react';
import styled from 'styled-components';

const BoxStyle = styled.div`
  border-radius: ${BORDER_RADIUS}px;
`;

const Box = ({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) => {
  return <BoxStyle style={style}>{children}</BoxStyle>;
};

export default Box;
