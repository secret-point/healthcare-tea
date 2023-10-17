import { StyleSheet } from 'react-native';
import { BASE_FONTS } from '~Root/config';
import adjust from '~Root/utils/adjust';
import { ITheme } from '~Root/services/theme/types';

export default (theme: ITheme) =>
  StyleSheet.create({
    textInput: {
      fontSize: adjust(12.5),
      color: theme.extra1Color,
      fontFamily: BASE_FONTS.regular,
    },
  });
