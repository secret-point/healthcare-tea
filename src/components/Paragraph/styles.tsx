import adjust, { adjustLineHeight } from '~Root/utils/adjust';

import { StyleSheet } from 'react-native';
import { BASE_COLORS, BASE_FONTS, BASE_STYLES } from '~Root/config/theme';

export default StyleSheet.create({
  h1: {
    fontSize: adjust(BASE_STYLES.h1),
    lineHeight: adjustLineHeight(BASE_STYLES.h1),
  },
  h2: {
    fontSize: adjust(BASE_STYLES.h2),
    lineHeight: adjustLineHeight(BASE_STYLES.h2),
  },
  h3: {
    fontSize: adjust(BASE_STYLES.h3),
    lineHeight: adjustLineHeight(BASE_STYLES.h3),
  },
  h4: {
    fontSize: adjust(BASE_STYLES.h4),
    lineHeight: adjustLineHeight(BASE_STYLES.h4),
  },
  h5: {
    fontSize: adjust(BASE_STYLES.h5),
    lineHeight: adjustLineHeight(BASE_STYLES.h5),
  },
  h6: {
    fontSize: adjust(BASE_STYLES.h6),
    lineHeight: adjustLineHeight(BASE_STYLES.h6),
  },
  h7: {
    fontSize: adjust(BASE_STYLES.h7),
    lineHeight: adjustLineHeight(BASE_STYLES.h7),
  },
  p: {
    fontSize: adjust(BASE_STYLES.p),
    lineHeight: adjustLineHeight(BASE_STYLES.p),
  },
  blackItalic: {
    fontFamily: BASE_FONTS.blackItalic,
  },
  black: {
    fontFamily: BASE_FONTS.black,
  },
  extraBoldItalic: {
    fontFamily: BASE_FONTS.extraBoldItalic,
  },
  extraBold: {
    fontFamily: BASE_FONTS.extraBold,
  },
  bold: {
    fontFamily: BASE_FONTS.bold,
  },
  semiboldItalic: {
    fontFamily: BASE_FONTS.semiboldItalic,
  },
  semibold: {
    fontFamily: BASE_FONTS.semibold,
  },
  mediumItalic: {
    fontFamily: BASE_FONTS.mediumItalic,
  },
  medium: {
    fontFamily: BASE_FONTS.medium,
  },
  regular: {
    fontFamily: BASE_FONTS.regular,
  },
  lightItalic: {
    fontFamily: BASE_FONTS.lightItalic,
  },
  light: {
    fontFamily: BASE_FONTS.light,
  },
  extraLightItalic: {
    fontFamily: BASE_FONTS.extraLightItalic,
  },
  extraLight: {
    fontFamily: BASE_FONTS.extraLight,
  },
  thin: {
    fontFamily: BASE_FONTS.thin,
  },
  interBlack: {
    fontFamily: BASE_FONTS.interBlack,
  },
  interExtraBold: {
    fontFamily: BASE_FONTS.interExtraBold,
  },
  interBold: {
    fontFamily: BASE_FONTS.interBold,
  },
  interSemibold: {
    fontFamily: BASE_FONTS.interSemibold,
  },
  interMedium: {
    fontFamily: BASE_FONTS.interMedium,
  },
  interRegular: {
    fontFamily: BASE_FONTS.interRegular,
  },
  interLight: {
    fontFamily: BASE_FONTS.interLight,
  },
  interExtraLight: {
    fontFamily: BASE_FONTS.interExtraLight,
  },
  interThin: {
    fontFamily: BASE_FONTS.interThin,
  },
  italic: {
    fontStyle: 'italic',
  },
  default: {
    fontFamily: BASE_FONTS.regular,
  },
  textWhite: {
    color: BASE_COLORS.whiteColor,
  },
  textCenter: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
  textLeft: {
    textAlign: 'left',
  },
});
