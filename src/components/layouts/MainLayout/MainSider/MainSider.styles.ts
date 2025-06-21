import { COLORS, LAYOUT, MEDIA } from '@/constants/constants';
import { Button, Layout } from 'antd';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface ISider {
  $bgColor: string;
}

export const Sider = styled(Layout.Sider)<ISider>`
  position: fixed;
  overflow: visible;
  /* right: 0; */
  z-index: 5;
  min-height: 100vh;
  max-height: 100vh;
  border-right: 1px solid ${COLORS.borderColor};
  background: ${(props) => props.$bgColor};

  @media only screen and (${MEDIA.md}) {
    right: unset;
    left: 0;
  }

  @media only screen and (${MEDIA.xl}) {
    position: unset;
  }
`;

export const SiderContent = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  max-height: calc(100vh - ${LAYOUT.headerHeight});

  @media only screen and (${MEDIA.md}) {
    max-height: calc(100vh - ${LAYOUT.headerHeight});
  }
`;

export const SiderLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  > img {
    flex-shrink: 0;
  }
`;

export const SiderLogoDiv = styled.div`
  height: ${LAYOUT.headerHeight};
  padding: ${LAYOUT.headerPadding};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (${MEDIA.md}) {
    height: ${LAYOUT.headerHeight};
    padding-top: ${LAYOUT.desktop.paddingVertical};
    padding-bottom: ${LAYOUT.desktop.paddingVertical};
  }
`;

export const BrandSpan = styled.span`
  margin: 0 1rem;
  font-weight: 700;
  font-size: 1.125rem;
  color: var(--white);
`;

export const CollapseButton = styled(Button)<{ $isCollapsed: boolean }>`
  transition: all 0.2s ease;
  position: absolute;
  right: 0.5rem;

  ${(props) =>
    props.$isCollapsed &&
    css`
      right: -0.75rem;
    `}
`;
