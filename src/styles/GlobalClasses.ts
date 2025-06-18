import { css } from 'styled-components';
import './index.css';

export const GlobalClasses = css`
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (min-width: 992px) {
    .login-image-box .show-on-lg {
      display: flex !important;
    }
  }

  .ant-typography {
    margin-bottom: 0 !important;
  }

  .h-full {
    height: 100%;
  }

  .h-screen {
    height: 100vh;
  }

  .w-full {
    width: 100%;
  }

  .text-center {
    text-align: center;
  }
`;
