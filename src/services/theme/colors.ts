import { ITheme } from '~Root/services/theme/types';

export enum THEME {
  DEFAULT = 'default',
  PURPLE = 'purple',
  GREEN = 'green',
  RED = 'red',
}

export const COLORS: Record<THEME, ITheme> = {
  [THEME.DEFAULT]: {
    primaryColor: '#35345F', // deepKoamaruColor
    contrastColor: '#FFFFFF',
    frameColor: '#FFFFFF',
    revContrastColor: '#000000',
    borderColor: '#C5C5E8',
    circleColor: '#3e3d7a',
    textCircleColor: '#FFFFFF',
    extra1Color: '#6E6DC5', // toolboxColor
    extra2Color: '#C5C5E8', // periwinkleColor
    extra3Color: '#4D4C8A', // purpleNavyColor
    extra4Color: '#1F1627', // raisinBlackColor
    extra5Color: '#9C9CBC', // cadetGreyColor
    extra6Color: '#F0F0F9', // antiFlashWhiteColor
    extra7Color: '#E5EBEC',
    text: {
      linkColor: '#DADADA', // gainsboroColor
      hintColor: '#A3A3A3', // quickSilverColor
      frameColor: '#0F0B14', // chineseBlackColor
    },
    frame: {
      bgColor: '#C5C5E8',
    },
    icon: {
      color: '#F0F0F9',
      activeColor: '#AE8AD1',
    },
    tabIcon: {
      color: '#C5C5E8',
      activeColor: '#C5C5E8',
      activeBgColor: '#4D4C8A',
    },
  },
  [THEME.PURPLE]: {
    primaryColor: '#E5E5E5',
    contrastColor: '#4D3762',
    frameColor: '#FFFFFF',
    revContrastColor: '#000000',
    borderColor: '#F5F0F9',
    circleColor: '#593f71',
    textCircleColor: '#FFFFFF',
    extra1Color: '#9A6DC5',
    extra2Color: '#BB92DC',
    extra3Color: '#BB92DC',
    extra4Color: '#1F1627',
    extra5Color: '#FFFFFF',
    extra6Color: '#EACCF9',
    extra7Color: '#E5EBEC',
    text: {
      linkColor: '#AE8AD1',
      hintColor: '#A8A6AA',
      frameColor: '#0F0B14',
    },
    frame: {
      bgColor: '#D4ADED',
    },
    icon: {
      color: '#4D3762',
      activeColor: '#AE8AD1',
    },
    tabIcon: {
      color: '#9A6DC5',
      activeColor: '#9A6DC5',
      activeBgColor: '#AE8AD1',
    },
  },
  [THEME.GREEN]: {
    primaryColor: '#558949',
    contrastColor: '#ffffff',
    frameColor: '#FFFFFF',
    revContrastColor: '#000000',
    borderColor: '#F5F0F9',
    circleColor: '#558949',
    textCircleColor: '#FFFFFF',
    extra1Color: '#6DB35F',
    extra2Color: '#6DB35F',
    extra3Color: '#6DB35F',
    extra4Color: '#1F1627',
    extra5Color: '#FFFFFF',
    extra6Color: '#B2DB8F',
    extra7Color: '#E5EBEC',
    text: {
      linkColor: '#B2DB8F',
      hintColor: '#A8A6AA',
      frameColor: '#0F0B14',
    },
    frame: {
      bgColor: '#B2DB8F',
    },
    icon: {
      color: '#6DB35F',
      activeColor: '#B2DB8F',
    },
    tabIcon: {
      color: '#6DB35F',
      activeColor: '#6DB35F',
      activeBgColor: '#B2DB8F',
    },
  },
  [THEME.RED]: {
    primaryColor: '#EB4A2E',
    contrastColor: '#ffffff',
    frameColor: '#FFFFFF',
    revContrastColor: '#000000',
    borderColor: '#F5F0F9',
    circleColor: '#EB4A2E',
    textCircleColor: '#FFFFFF',
    extra1Color: '#FC7643',
    extra2Color: '#FFA364',
    extra3Color: '#FFA364',
    extra4Color: '#1F1627',
    extra5Color: '#FFFFFF',
    extra6Color: '#FFA364',
    extra7Color: '#E5EBEC',
    text: {
      linkColor: '#FFA364',
      hintColor: '#A8A6AA',
      frameColor: '#0F0B14',
    },
    frame: {
      bgColor: '#FFA364',
    },
    icon: {
      color: '#FC7643',
      activeColor: '#FFA364',
    },
    tabIcon: {
      color: '#FC7643',
      activeColor: '#FC7643',
      activeBgColor: '#FFA364',
    },
  },
};
