import { useResponsive } from '@/hooks/useResponsive';
import { useMemo } from 'react';
import * as S from './MainSider.styles';
import { theme } from 'antd';
import { SiderLogo } from './SiderLogo';
import { Overlay } from './Overlay';

interface MainSiderProps {
  isCollapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
}

const MainSider: React.FC<MainSiderProps> = ({ isCollapsed, setCollapsed, ...props }) => {
  const { mobileOnly, isTablet } = useResponsive();

  const isCollapsible = useMemo(() => mobileOnly && isTablet, [mobileOnly, isTablet]);

  const toggleSider = () => setCollapsed(!isCollapsed);

  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
    <>
      <S.Sider
        $bgColor={colorBgContainer}
        collapsedWidth={isTablet ? 80 : 0}
        collapsed={isCollapsed}
        collapsible={isCollapsible}
        width={270}
        {...props}
      >
        <SiderLogo isSiderCollapsed={isCollapsed} toggleSider={toggleSider} />
        <S.SiderContent>{/* <SiderMenu setCollapsed={setCollapsed} /> */}</S.SiderContent>
      </S.Sider>
      {mobileOnly && <Overlay onClick={toggleSider} $show={!isCollapsed} />}
    </>
  );
};

export default MainSider;
