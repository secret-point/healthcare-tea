import { StyleSheet, Dimensions } from 'react-native';
import adjust from '~Root/utils/adjust';

const { width } = Dimensions.get('screen');
let originalWidth = (width - 40) / 2;
const ratio = originalWidth / 166;

export default StyleSheet.create({
  cardMedium: {
    height: 160 * ratio,
  },
  cardSmall: {
    height: 45 * ratio,
  },
  titleContainer: {
    zIndex: 12,
  },
  titleContainerMedium: {
    position: 'absolute',
    top: adjust(10),
    left: adjust(10),
  },
  titleContainerSmall: {
    position: 'absolute',
    top: adjust(5),
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
});
