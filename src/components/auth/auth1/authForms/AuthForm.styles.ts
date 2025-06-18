import { Space } from 'antd';
import styled from 'styled-components';

export const LogoContainer = styled(Space)`
  padding: 0 24px;
  height: 70px;
`;

export const LoginImageBox = styled.div`
  height: calc(100vh - 75px);
  @media screen and (max-width: 1023.98px) {
    display: none;
  }
`;

export const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
`;
