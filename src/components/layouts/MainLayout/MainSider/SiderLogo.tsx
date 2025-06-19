import { useResponsive } from '@/hooks/useResponsive';
import React from 'react';
import * as S from './MainSider.styles';
import { AlignJustify } from 'lucide-react';

interface SiderLogoProps {
  isSiderCollapsed: boolean;
  toggleSider: () => void;
}
export const SiderLogo: React.FC<SiderLogoProps> = ({ isSiderCollapsed, toggleSider }) => {
  const { tabletOnly } = useResponsive();

  return (
    <S.SiderLogoDiv>
      <S.SiderLogoLink to='/'>
        <img src={'/vite.svg'} alt='Lightence' width={48} height={48} />
        <S.BrandSpan>Lightence</S.BrandSpan>
      </S.SiderLogoLink>
      {tabletOnly && (
        <S.CollapseButton
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
