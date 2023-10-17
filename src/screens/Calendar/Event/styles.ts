import { StyleSheet } from 'react-native';
import { BASE_COLORS } from '~Root/config';

export default StyleSheet.create({
  buttonStyle: {
    minWidth: 135,
  },
  linkText: {
    textDecorationLine: 'underline',
    color: BASE_COLORS.linkColor,
  },
});
