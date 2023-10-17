import { StyleSheet } from 'react-native';
import { ITheme } from '~Root/services/theme/types';

export default (theme: ITheme, isChecked: boolean) =>
  StyleSheet.create({
    checkBoxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    checkBox: {
      width: 20,
      height: 20,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: theme.extra1Color,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: isChecked ? theme.extra1Color : 'transparent',
      marginBottom: 3,
    },
  });
