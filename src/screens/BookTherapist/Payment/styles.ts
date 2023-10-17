import { StyleSheet } from 'react-native';
import { ITheme } from '~Root/services/theme/types';

export default (theme: ITheme) =>
  StyleSheet.create({
    checkBox: {
      width: 25,
      height: 25,
      borderRadius: 9999,
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderColor: theme.extra1Color,
      marginBottom: 3,
      marginRight: 15,
    },
    checkBoxUncheck: {
      backgroundColor: 'transparent',
    },
    checkBoxChecked: {
      backgroundColor: theme.extra1Color,
    },
    cardIcon: {
      maxWidth: 35,
      height: 20,
    },
    cardSingleIcon: {
      maxWidth: 100,
      height: 20,
    },

    cardFormInput: {
      paddingHorizontal: 8,
      paddingVertical: 16,
      borderRadius: 12,
    },
  });
