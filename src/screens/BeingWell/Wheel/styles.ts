import { StyleSheet } from 'react-native';
import adjust from '~Root/utils/adjust';

export default StyleSheet.create({
  wheelContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  wheelButtonContainer: {
    position: 'absolute',
    width: adjust(55),
    height: adjust(55),
  },
  wheelButton: {
    width: '100%',
    height: '100%',
  },
});
