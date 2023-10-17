import { StyleSheet } from 'react-native';
import adjust from '~Root/utils/adjust';
import { ITheme } from '~Root/services/theme/types';

export default (theme: ITheme) =>
  StyleSheet.create({
    buttonBack: {
      marginLeft: -10,
    },
    numberBg: {
      backgroundColor: theme.extra1Color,
      borderRadius: adjust(32),
    },
    numberContainer: {
      marginRight: adjust(-11),
      marginBottom: adjust(-8),
    },
  });
