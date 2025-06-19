import { LAYOUT, MEDIA } from '@/constants/constants';
import { Layout } from 'antd';
import styled, { css } from 'styled-components';

interface Header {
  $isTwoColumnsLayoutHeader: boolean;
  $bgColor: string;
}

export const Header = styled(Layout.Header)<Header>`
  background: ${(props) => props.$bgColor};
  line-height: 1.5;
  align-content: center;
  @media only screen and (${MEDIA.md}) {
    padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
    height: ${LAYOUT.headerHeight};
  }

  @media only screen and (${MEDIA.md}) {
    ${(props) =>
      props?.$isTwoColumnsLayoutHeader &&
      css`
        padding: 0;
      `}
  }
`;
