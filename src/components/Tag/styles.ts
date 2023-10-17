import { StyleSheet } from 'react-native';

import { ITheme } from '~Root/services/theme/types';

export default (theme: ITheme) =>
  StyleSheet.create({
    tag: {
      borderWidth: 1,
      borderColor: theme.extra5Color,
      backgroundColor: theme.extra2Color,
    },
  });
