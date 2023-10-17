import { Dimensions, StyleSheet } from 'react-native';
import adjust from '~Root/utils/adjust';

const { width } = Dimensions.get('screen');
const ratio = width / 345;

export default StyleSheet.create({
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
});
