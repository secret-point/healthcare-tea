import { StyleSheet, Dimensions } from 'react-native';
import adjust from '~Root/utils/adjust';

const { width } = Dimensions.get('screen');
let originalWidth = (width - 40) / 2;
const ratio = originalWidth / 172;

export default StyleSheet.create({
  cardMedium: {
    width: originalWidth,
    height: 209 * ratio,
  },
  cardSmall: {
    width: originalWidth - 8,
    height: 101 * ratio,
  },
  titleContainer: {
    width: originalWidth - adjust(10),
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
