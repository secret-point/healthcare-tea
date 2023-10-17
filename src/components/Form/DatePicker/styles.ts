import { StyleSheet } from 'react-native';
import { BASE_COLORS, GlobalStyles } from '~Root/config';
import adjust from '~Root/utils/adjust';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonStyle: {
    ...GlobalStyles.inputStyle,
    borderColor: BASE_COLORS.whiteColor,
    borderWidth: 1,
    paddingVertical: adjust(8),
    paddingRight: adjust(20),
    paddingLeft: adjust(10),
    borderRadius: adjust(8),
    backgroundColor: BASE_COLORS.whiteColor,
    flexDirection: 'row',
    columnGap: 15,
    alignItems: 'center',
  },
  buttonErrorStyle: {
    borderColor: BASE_COLORS.redColor,
  },
  textError: {
    ...GlobalStyles.mt10,
    color: BASE_COLORS.redColor,
  },
});
