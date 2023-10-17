import adjust from '~Root/utils/adjust';

import { Platform, StyleSheet } from 'react-native';
import { BASE_COLORS } from '~Root/config/theme';

const shadowStyle = StyleSheet.create({
  listContainer:
    Platform.OS === 'ios'
      ? {
          shadowColor: BASE_COLORS.blackColor,
          shadowOpacity: 0.5,
          shadowRadius: 5,
          shadowOffset: { height: 2, width: 2 },
        }
      : {
          elevation: 3,
          overflow: 'hidden',
        },
});

export default StyleSheet.create({
  line: {
    height: 1,
    width: '100%',
    backgroundColor: BASE_COLORS.blackColor,
  },
  keyboardAvoidingView: {
    position: 'absolute',
    alignSelf: 'center',
    width: '90%',
  },
  listContainer: {
    ...shadowStyle.listContainer,
    width: '80%',
    height: 300,
    backgroundColor: BASE_COLORS.whiteColor,
    padding: adjust(8),
    borderRadius: adjust(4),
    justifyContent: 'center',
    marginTop: adjust(10),
  },
  box: {
    borderColor: 'rgba(136, 136, 136, 0.5)',
    borderWidth: 1,
    borderRadius: adjust(8),
    paddingHorizontal: adjust(10),
    paddingVertical: adjust(8),
    minHeight: 50,
    backgroundColor: BASE_COLORS.whiteColor,
  },
  code: {
    width: 80,
  },
  codeHeaderContainer: {
    position: 'absolute',
    top: -8,
    left: 10,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    zIndex: 10,
  },
  codeHeader: {
    paddingHorizontal: 5,
  },
  flagContainer: {
    width: 33,
    height: 22,
    borderRadius: adjust(8),
  },
  flag: {
    width: '100%',
    height: '100%',
  },
});
