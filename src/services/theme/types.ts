import { THEME } from '~Root/services/theme/colors';

export interface ITheme {
  primaryColor: string;
  contrastColor: string;
  frameColor: string;
  revContrastColor: string;
  borderColor: string;
  circleColor: string;
  textCircleColor: string;
  extra1Color: string;
  extra2Color: string;
  extra3Color: string;
  extra4Color: string;
  extra5Color: string;
  extra6Color: string;
  extra7Color: string;
  text: {
    linkColor: string;
    hintColor: string;
    frameColor: string;
  };
  frame: {
    bgColor: string;
  };
  icon: {
    color: string;
    activeColor: string;
  };
  tabIcon: {
    color: string;
    activeColor: string;
    activeBgColor: string;
  };
}

export interface IThemeState {
  type: THEME;
}
