import { MEDIA } from '@/constants/constants';
import { Col, Collapse } from 'antd';
import { AlignJustify } from 'lucide-react';
import styled from 'styled-components';

export const HeaderActionWrapper = styled.div`
  cursor: pointer;

  & > .ant-btn > span[role='img'],
  .ant-badge {
    font-size: 1.25rem;

    @media only screen and (${MEDIA.md}) {
      font-size: 1.625rem;
    }
  }

  & .ant-badge {
    display: inline-block;
  }
`;

export const DropdownCollapse = styled(Collapse)`
  & > .ant-collapse-item > .ant-collapse-header {
    font-weight: 600;
    font-size: 0.875rem;

    color: var(--primary-color);

    @media only screen and (${MEDIA.md}) {
      font-size: 1rem;
    }
  }

  & > .ant-collapse-item-disabled > .ant-collapse-header {
    cursor: default;

    & > span[role='img'] {
      display: none;
    }
  }
`;

export const BurgerCol = styled(Col)`
  z-index: 999;
  display: flex;
`;

export const MobileBurger = styled(AlignJustify)`
  width: 21px;
  height: 21px;
  margin-right: -0.5rem;
  cursor: pointer;
  color: var(--text-main-color);
`;

export const ProfileColumn = styled(Col)``;
