import { Dimensions, StyleSheet } from 'react-native';
import { BASE_FONTS } from '~Root/config';
import adjust from '~Root/utils/adjust';
import { ITheme } from '~Root/services/theme/types';

const { width } = Dimensions.get('screen');
const ratio = width / 345;

export default (theme: ITheme) =>
  StyleSheet.create({
    imgContainer: {
      width: width - 120,
      height: 300 * ratio,
      borderRadius: adjust(10),
      overflow: 'hidden',
    },
    img: {
      width: '100%',
      height: '100%',
    },
    textInput: {
      fontSize: adjust(14),
      color: theme.extra1Color,
      fontFamily: BASE_FONTS.regular,
    },
  });
