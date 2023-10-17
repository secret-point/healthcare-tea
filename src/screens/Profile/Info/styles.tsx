import { StyleSheet } from 'react-native';

import { BASE_COLORS, BASE_STYLES, GlobalStyles } from '~Root/config';
import adjust from '~Root/utils/adjust';
import { ITheme } from '~Root/services/theme/types';

export default (theme: ITheme) =>
  StyleSheet.create({
    avatarContainer: {
      width: 88,
      height: 88,
      borderRadius: 9999,
      borderWidth: 1,
      borderColor: theme.contrastColor,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    iconCamera: {
      position: 'absolute',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10,
    },
    inputStyle: {
      ...GlobalStyles.inputStyle,
      borderRadius: adjust(8),
      color: BASE_COLORS.blackColor,
      backgroundColor: theme.extra2Color,
    },
    labelStyle: {
      color: BASE_COLORS.whiteColor,
    },
    inputErrorStyle: {
      borderColor: BASE_COLORS.redColor,
    },
    contentContainerStyle: {
      width: '150%',
    },
    header: {
      height: adjust(100),
    },
    textInput: {
      borderRadius: adjust(8),
      backgroundColor: theme.extra2Color,
      height: adjust(120),
      fontSize: BASE_STYLES.h4,
    },
    textInput2: {
      borderRadius: adjust(8),
      backgroundColor: theme.extra2Color,
      height: adjust(80),
      fontSize: BASE_STYLES.h4,
    },
    priceItem: {
      backgroundColor: BASE_COLORS.whiteColor,
      borderRadius: adjust(8),
    },
  });
