import { useResponsive } from '@/hooks/useResponsive';
import React from 'react';
import * as S from './MainSider.styles';
import { AlignJustify } from 'lucide-react';
import { webName } from '@/configs/main.configs';

interface SiderLogoProps {
  isSiderCollapsed: boolean;
  toggleSider: () => void;
}
export const SiderLogo: React.FC<SiderLogoProps> = ({ isSiderCollapsed, toggleSider }) => {
  const { tabletOnly } = useResponsive();

  return (
    <S.SiderLogoDiv>
      <S.SiderLogoLink to='/'>
        <img src={'/vite.svg'} alt='Lightence' width={40} height={40} />
        <S.BrandSpan>{webName}</S.BrandSpan>
      </S.SiderLogoLink>
      {tabletOnly && (
        <S.CollapseButton
          color='blue'
          variant='filled'
          shape='circle'
          size='small'
          $isCollapsed={isSiderCollapsed}
          icon={<AlignJustify />}
          onClick={toggleSider}
        />
      )}
    </S.SiderLogoDiv>
  );
};
