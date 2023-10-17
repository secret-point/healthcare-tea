import { StyleSheet } from 'react-native';
import adjust from '~Root/utils/adjust';

export default StyleSheet.create({
  cardMedium: {
    width: adjust(104),
    height: adjust(108),
  },
  cardSmall: {
    width: 104,
    height: 108,
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
