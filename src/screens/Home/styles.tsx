import { Dimensions, StyleSheet } from 'react-native';
import { BASE_COLORS } from '~Root/config';
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
    numberContainer: {
      marginRight: adjust(-11),
      marginBottom: adjust(-8),
    },
    imageList: {
      marginLeft: adjust(-12),
      overflow: 'hidden',
    },
    circle: {
      marginLeft: adjust(-12),
      borderWidth: 1,
      borderColor: theme.extra1Color,
      backgroundColor: theme.extra2Color,
    },
    btn: {
      borderColor: theme.extra1Color,
      borderWidth: 1,
      borderTopLeftRadius: adjust(5),
      borderTopRightRadius: adjust(5),
      borderBottomLeftRadius: adjust(5),
      borderBottomRightRadius: adjust(5),
    },
    btnPremium: {
      backgroundColor: BASE_COLORS.yellowOrangeColor,
    },
  });
