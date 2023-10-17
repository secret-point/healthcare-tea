import { StyleSheet } from 'react-native';
import { BASE_COLORS } from '~Root/config';
import adjust from '~Root/utils/adjust';
import { ITheme } from '~Root/services/theme/types';

export default (theme: ITheme) =>
  StyleSheet.create({
    radioContainer: {
      backgroundColor: theme.extra1Color,
    },
    circleSelected: {
      borderWidth: 1,
      borderColor: BASE_COLORS.whiteColor,
      backgroundColor: BASE_COLORS.whiteColor,
      width: adjust(22),
      height: adjust(22),
      borderRadius: adjust(44),
    },
    circle: {
      borderWidth: 1,
      borderColor: theme.extra1Color,
      width: adjust(22),
      height: adjust(22),
      borderRadius: adjust(44),
    },
  });
