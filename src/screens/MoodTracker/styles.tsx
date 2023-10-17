import { Dimensions, StyleSheet } from 'react-native';
import { BASE_FONTS, BASE_STYLES } from '~Root/config';
import adjust from '~Root/utils/adjust';
import { ITheme } from '~Root/services/theme/types';

const { width } = Dimensions.get('screen');
const ratio = width / 344;
const originalWidth = width - 40;

export default (theme: ITheme) =>
  StyleSheet.create({
    fontStyle: {
      fontFamily: BASE_FONTS.medium,
      fontSize: adjust(BASE_STYLES.p),
      color: theme.extra2Color,
    },
    activeFontStyle: {
      fontFamily: BASE_FONTS.medium,
      fontSize: adjust(BASE_STYLES.p),
      color: theme.extra1Color,
    },
    icon344x144: {
      width: originalWidth,
      height: 144 * ratio,
    },
    icon342x151: {
      width: originalWidth,
      height: 151 * ratio,
    },
    icon338x151: {
      width: originalWidth,
      height: 151 * ratio,
    },
  });
