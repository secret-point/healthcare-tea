import { StyleSheet } from 'react-native';
import { BASE_FONTS, BASE_STYLES } from '~Root/config';
import adjust, { adjustLineHeight } from '~Root/utils/adjust';
import { ITheme } from '~Root/services/theme/types';

export default (theme: ITheme) =>
  StyleSheet.create({
    fontStyle: {
      fontFamily: BASE_FONTS.bold,
      fontSize: adjust(BASE_STYLES.p),
      lineHeight: adjustLineHeight(BASE_STYLES.p),
      color: theme.extra2Color,
    },
    activeFontStyle: {
      fontFamily: BASE_FONTS.bold,
      fontSize: adjust(BASE_STYLES.p),
      lineHeight: adjustLineHeight(BASE_STYLES.p),
      color: theme.extra1Color,
    },
  });
