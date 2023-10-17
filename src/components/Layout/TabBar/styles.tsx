import { StyleSheet } from 'react-native';
import adjust from '~Root/utils/adjust';
import { ITheme } from '~Root/services/theme/types';

const createStyles = (theme: ITheme) =>
  StyleSheet.create({
    tabContainer: {
      height: adjust(60),
      backgroundColor: theme.primaryColor,
      borderTopWidth: 1,
      borderTopColor: theme.borderColor,
    },
    tabItem: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: adjust(6),
      paddingHorizontal: adjust(6),
    },
    tabItemActive: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: adjust(6),
      paddingHorizontal: adjust(6),
      backgroundColor: theme.tabIcon.activeBgColor,
      borderRadius: adjust(50),
    },
  });

export default createStyles;
