import { Spin, theme } from 'antd';
import React from 'react';
import styled from 'styled-components';

export const Loading: React.FC = () => {
  const {
    token: { borderRadius }
  } = theme.useToken();
  return (
    <SpinnerContainer style={{ borderRadius }}>
      <Spin tip='Loading'>
        <div className='content' />
      </Spin>
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  text-align: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.05);
  .content {
    padding: 50px;
  }
`;
