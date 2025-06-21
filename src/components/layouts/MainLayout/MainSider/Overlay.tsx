import styled, { css } from 'styled-components';

interface OverlayProps {
  $show: boolean;
}

export const Overlay = styled.div<OverlayProps>`
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.05);

  ${(props) =>
    props.$show &&
    css`
      backdrop-filter: blur(4px);
      width: 100vw;
      height: 100vh;
    `}
`;
