import { StyleSheet } from 'react-native';

import adjust from '~Root/utils/adjust';
import { BASE_COLORS } from '~Root/config';

export default StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box: {
    borderColor: BASE_COLORS.disabledColor,
    borderWidth: 1,
    borderRadius: adjust(10),
    minWidth: adjust(40),
    minHeight: adjust(54),
    padding: adjust(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxFocus: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: adjust(10),
    minWidth: adjust(40),
    minHeight: adjust(54),
    padding: adjust(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: '#e5e5e5',
    borderWidth: 1,
    borderRadius: adjust(10),
    padding: adjust(12),
    marginTop: adjust(50),
    color: BASE_COLORS.whiteColor,
    position: 'absolute',
    opacity: 0,
  },
  boxArea: {
    backgroundColor: BASE_COLORS.whiteColor,
    marginRight: adjust(5),
  },
});
