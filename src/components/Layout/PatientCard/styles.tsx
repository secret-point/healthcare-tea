import { StyleSheet } from 'react-native';
import { BASE_COLORS } from '~Root/config';

export default StyleSheet.create({
  card: {
    width: 120,
    height: 195,
    padding: 8,
  },
  image: {
    backgroundColor: BASE_COLORS.gray,
    width: '100%',
    height: 80,
    zIndex: 8,
  },
});
