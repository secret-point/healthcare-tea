import { StyleSheet } from 'react-native';
import { ITheme } from '~Root/services/theme/types';

export const createStyles = (theme: ITheme) =>
  StyleSheet.create({
    borderExtra1: {
      borderColor: theme.extra1Color,
    },
    bgContrast: {
      backgroundColor: theme.contrastColor,
    },
    bgPrimary: {
      backgroundColor: theme.primaryColor,
    },
    bgExtra1: {
      backgroundColor: theme.extra1Color,
    },
    bgExtra2: {
      backgroundColor: theme.extra2Color,
    },
    bgExtra3: {
      backgroundColor: theme.extra3Color,
    },
    bgExtra5: {
      backgroundColor: theme.extra5Color,
    },
    bgExtra6: {
      backgroundColor: theme.extra6Color,
    },
    bgExtra7: {
      backgroundColor: theme.extra7Color,
    },
  });
