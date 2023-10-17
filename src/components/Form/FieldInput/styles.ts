import { StyleSheet } from 'react-native';
import { BASE_COLORS, GlobalStyles } from '~Root/config';
import adjust from '~Root/utils/adjust';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  inputStyle: {
    ...GlobalStyles.inputStyle,
    borderColor: BASE_COLORS.whiteColor,
    borderWidth: 1,
    paddingVertical: adjust(8),
    paddingRight: adjust(20),
    paddingLeft: adjust(15),
    borderRadius: adjust(8),
    color: BASE_COLORS.blackColor,
    backgroundColor: BASE_COLORS.whiteColor,
  },
  inputErrorStyle: {
    borderColor: BASE_COLORS.redColor,
  },
  textError: {
    ...GlobalStyles.mt10,
    color: BASE_COLORS.redColor,
  },
  rightIconStyle: {
    position: 'absolute',
    right: adjust(8),
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    zIndex: 10,
  },
});
