import { StyleSheet } from 'react-native';

import { ITheme } from '~Root/services/theme/types';

export default (theme: ITheme) =>
  StyleSheet.create({
    badge: {
      backgroundColor: theme.extra1Color,
    },
  });
