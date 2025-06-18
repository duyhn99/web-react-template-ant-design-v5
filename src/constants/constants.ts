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

export const BORDER_RADIUS: number = 7;

export const SIDER = {
  COLLAPSED_WIDTH: 86,
  WIDTH: 270
} as const;

export const FONT_WEIGHT = {
  THIN: '100',
  EXTRALIGHT: '200',
  LIGHT: '300',
  REGULAR: '400',
  MEDIUM: '500',
  SEMIBOLD: '600',
  BOLD: '700',
  EXTRABOLD: '800',
  BLACK: '900'
} as const;

export const BREAKPOINTS = {
  XS: 360,
  SM: 568,
  MD: 768,
  LG: 992,
  XL: 1280,
  XXL: 1920
} as const;

const getMedia = <T extends number>(breakpoint: T): `(min-width: ${T}px)` => `(min-width: ${breakpoint}px)`;

export const MEDIA = {
  XS: getMedia(BREAKPOINTS.XS),
  SM: getMedia(BREAKPOINTS.SM),
  MD: getMedia(BREAKPOINTS.MD),
  LG: getMedia(BREAKPOINTS.LG),
  XL: getMedia(BREAKPOINTS.XL),
  XXL: getMedia(BREAKPOINTS.XXL)
};
