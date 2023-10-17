import { StyleSheet } from 'react-native';
import { GlobalStyles } from '~Root/config';
import adjust from '~Root/utils/adjust';
import { ITheme } from '~Root/services/theme/types';

export default (theme: ITheme) =>
  StyleSheet.create({
    tag: {
      ...GlobalStyles.pv10,
      ...GlobalStyles.ph15,
      ...GlobalStyles.mb15,
      backgroundColor: theme.extra2Color,
      borderRadius: adjust(8),
      flexDirection: 'row',
      alignSelf: 'flex-start',
      alignItems: 'center',
    },
    tagActive: {
      ...GlobalStyles.pv10,
      ...GlobalStyles.ph15,
      ...GlobalStyles.mb15,
      backgroundColor: theme.extra1Color,
      borderRadius: adjust(8),
      flexDirection: 'row',
      alignSelf: 'flex-start',
      alignItems: 'center',
    },
  });
