import { LAYOUT, MEDIA } from '@/constants/constants';
import { Layout } from 'antd';
import styled from 'styled-components';

interface Header {
  $bgColor: string;
}

export const Header = styled(Layout.Header)<Header>`
  background: ${(props) => props.$bgColor};
  line-height: 1.5;
  align-content: center;
  @media only screen and (${MEDIA.md}) {
    padding: 0 ${LAYOUT.desktop.paddingHorizontal};
    height: ${LAYOUT.headerHeight};
  }
`;
