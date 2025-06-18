import { createGlobalStyle } from 'styled-components';
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

  .available-tucks-card .ant-list-item {
    /*padding: 0;*/
  }

  .ant-btn-icon {
    line-height: 12px;
  }
`;
