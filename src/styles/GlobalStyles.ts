import styled, { createGlobalStyle } from 'styled-components';
import { GlobalClasses } from './GlobalClasses';

export const GlobalStyles = createGlobalStyle`
  ${GlobalClasses}

  .demo-logo-vertical {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 6px;
  }

  .notifications-list-card {
    min-width: 300px;
    .ant-card-body {
      padding: 0 0 1rem 0;
    }
  }

  .ant-btn-icon {
    line-height: 12px;
  }
`;

export const AvatarMini = styled.div`
  width: 24px;
  height: 24px;
  background-color: #e6fffb; /* success.light */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const ChartWrapper = styled.div<{ height: string }>`
  height: ${({ height }) => height};
  width: 100%;
`;
