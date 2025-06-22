import { BORDER_RADIUS, COLORS } from '@/constants/constants';

export const themeConfig = {
  token: {
    colorPrimary: COLORS['500'],
    borderRadius: BORDER_RADIUS,
    fontFamily: 'Inter, sans-serif'
  },
  components: {
    Breadcrumb: {
      linkColor: 'rgba(0,0,0,.8)',
      itemColor: 'rgba(0,0,0,.8)'
    },
    Button: {
      colorLink: COLORS['500'],
      colorLinkActive: COLORS['700'],
      colorLinkHover: COLORS['300']
    },
    Calendar: {
      colorBgContainer: 'none'
    },
    Card: {
      colorBorderSecondary: COLORS['borderColor']
    },
    Form: {
      itemMarginBottom: 16
    },
    Carousel: {
      colorBgContainer: COLORS['800'],
      dotWidth: 8
    },
    Rate: {
      colorFillContent: COLORS['100'],
      colorText: COLORS['600']
    },
    Segmented: {
      colorBgLayout: COLORS['100'],
      borderRadius: 6,
      colorTextLabel: '#000000'
    },
    Table: {
      borderColor: COLORS['100'],
      colorBgContainer: 'none',
      headerBg: 'none',
      rowHoverBg: COLORS['50']
    },
    Tabs: {
      colorBorderSecondary: COLORS['100']
    },
    Timeline: {
      dotBg: 'none'
    },
    Typography: {
      colorLink: COLORS['500'],
      colorLinkActive: COLORS['700'],
      colorLinkHover: COLORS['300'],
      linkHoverDecoration: 'underline'
    }
  }
};
