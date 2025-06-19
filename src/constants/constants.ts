export const COLORS = {
  50: '#e0f1ff',
  100: '#b0d2ff',
  200: '#7fb0ff',
  300: '#4d8bff',
  400: '#1e79fe',
  500: '#076ee5',
  600: '#0062b3',
  700: '#004f81',
  800: '#003650',
  900: '#001620',
  borderColor: '#E2E8F0'
};

export const FONT_WEIGHT = {
  thin: '100',
  extraLight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extraBold: '800',
  black: '900'
} as const;

export const BORDER_RADIUS: number = 7;

export const BREAKPOINTS = {
  xs: 360,
  sm: 568,
  md: 768,
  lg: 992,
  xl: 1280,
  xxl: 1920
} as const;

const getMedia = <T extends number>(breakpoint: T): `(min-width: ${T}px)` => `(min-width: ${breakpoint}px)`;

export const MEDIA = {
  xs: getMedia(BREAKPOINTS.xs),
  sm: getMedia(BREAKPOINTS.sm),
  md: getMedia(BREAKPOINTS.md),
  lg: getMedia(BREAKPOINTS.lg),
  xl: getMedia(BREAKPOINTS.xl),
  xxl: getMedia(BREAKPOINTS.xxl)
};

export const SIDER = {
  COLLAPSED_WIDTH: 86,
  WIDTH: 270
} as const;

export const LAYOUT = {
  headerHeight: '4rem',
  headerPadding: '1rem',
  mobile: {
    paddingVertical: '1rem',
    paddingHorizontal: '1.5rem'
  },
  desktop: {
    paddingVertical: '1rem',
    paddingHorizontal: '1.5rem'
  }
} as const;
