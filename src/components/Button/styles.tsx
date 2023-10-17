import { StyleSheet } from 'react-native';

import adjust from '~Root/utils/adjust';

export default StyleSheet.create({
  containerCommonStyle: {
    borderRadius: adjust(12),
  },
  addButton: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    position: 'absolute',
    bottom: 16,
    right: 16,
    zIndex: 999999,
  },
  addButtonText: {
    position: 'absolute',
    fontSize: 60,
    verticalAlign: 'middle',
  },
});
