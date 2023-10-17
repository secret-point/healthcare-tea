import { StyleSheet } from 'react-native';
import adjust from '~Root/utils/adjust';

export default StyleSheet.create({
  roundedTop: {
    borderTopLeftRadius: adjust(8),
    borderTopRightRadius: adjust(8),
  },
  roundedBottom: {
    borderBottomLeftRadius: adjust(8),
    borderBottomRightRadius: adjust(8),
  },
  items: {
    marginTop: adjust(-2),
  },
});
