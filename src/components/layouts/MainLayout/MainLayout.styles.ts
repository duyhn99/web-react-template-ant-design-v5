import { MEDIA } from '@/constants/constants';
import { Layout } from 'antd';
import styled from 'styled-components';

export const LayoutMaster = styled(Layout)`
  height: 100vh;
`;

export const LayoutMain = styled(Layout)`
  @media only screen and (${MEDIA.md}) {
    margin-left: 80px;
  }

  @media only screen and (${MEDIA.xl}) {
    margin-left: unset;
  }
`;
