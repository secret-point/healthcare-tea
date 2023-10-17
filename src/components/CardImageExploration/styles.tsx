import { StyleSheet, Dimensions } from 'react-native';
import adjust from '~Root/utils/adjust';

const { width } = Dimensions.get('screen');
let originalWidth = (width - 45) / 2;
const ratio = originalWidth / 166;

export default StyleSheet.create({
  cardMedium: {
    width: originalWidth,
    height: 170 * ratio,
  },
  titleContainer: {
    width: originalWidth - adjust(10),
    height: '100%',
    zIndex: 12,
  },
  titleContainerMedium: {
    position: 'absolute',
    top: adjust(10),
    left: adjust(10),
  },
  image: {
    width: '100%',
    height: '100%',
    zIndex: 8,
  },
  bgCard: {
    width: '100%',
    height: '100%',
    zIndex: 10,
    opacity: 0.3,
    position: 'absolute',
  },
  tag: {
    backgroundColor: 'rgba(21, 8, 36, 0.46)',
    borderRadius: adjust(6),
  },
});
