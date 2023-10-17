import { StyleSheet } from 'react-native';
import { ITheme } from '~Root/services/theme/types';

export default (theme: ITheme) =>
  StyleSheet.create({
    childrenContainerStyle: {
      zIndex: -9999,
    },
    viewContainer: {
      backgroundColor: theme.circleColor,
    },
  });
