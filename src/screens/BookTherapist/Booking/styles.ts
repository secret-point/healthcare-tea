import { StyleSheet } from 'react-native';
import { BASE_COLORS } from '~Root/config';
import { ITheme } from '~Root/services/theme/types';

export default (theme: ITheme) =>
  StyleSheet.create({
    listContainer: {
      borderRadius: 12,
      flexWrap: 'wrap',
      flexDirection: 'row',
    },
    slotItem: {
      width: '50%',
    },
    slotItemContent: {
      marginHorizontal: 9,
      marginVertical: 6,
      backgroundColor: BASE_COLORS.grayE4,
      paddingHorizontal: 10,
      paddingVertical: 12,
      borderRadius: 8,
    },
    slotItemContentActive: {
      backgroundColor: theme.extra1Color,
    },
  });
