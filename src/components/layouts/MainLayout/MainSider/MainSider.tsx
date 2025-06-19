import { useResponsive } from '@/hooks/useResponsive';
import { useMemo } from 'react';
import * as S from './MainSider.styles';
import { theme } from 'antd';
import { SiderLogo } from './SiderLogo';

interface MainSiderProps {
  isCollapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
}

const MainSider: React.FC<MainSiderProps> = ({ isCollapsed, setCollapsed, ...props }) => {
  const { mobileOnly, tabletOnly } = useResponsive();

  const isCollapsible = useMemo(() => mobileOnly && tabletOnly, [mobileOnly, tabletOnly]);

  const toggleSider = () => setCollapsed(!isCollapsed);

  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    <>
      <S.Sider $bgColor={colorBgContainer} collapsed={isCollapsed} collapsible={isCollapsible} width={270} {...props}>
        <SiderLogo isSiderCollapsed={isCollapsed} toggleSider={toggleSider} />
        <S.SiderContent>{/* <SiderMenu setCollapsed={setCollapsed} /> */}</S.SiderContent>
      </S.Sider>
    </>
  );
};

export default MainSider;
