import { LAYOUT, MEDIA } from '@/constants/constants';
import { Layout } from 'antd';
import styled from 'styled-components';

export default styled(Layout.Content)`
  padding: ${LAYOUT.mobile.paddingVertical} ${LAYOUT.mobile.paddingHorizontal};
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (${MEDIA.md}) {
    padding: ${LAYOUT.desktop.paddingVertical} ${LAYOUT.desktop.paddingHorizontal};
  }
`;
