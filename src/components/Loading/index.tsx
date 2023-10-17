import React, { memo } from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from './styles';
import { useAppTheme } from '~Root/services/theme/hook';
import { GlobalStyles } from '~Root/config';

type Props = {
  fill?: boolean;
};

const Loading = memo(({ fill = false }: Props) => {
  const { theme } = useAppTheme();

  return (
    <View
      style={[
        styles.container,
        GlobalStyles.itemsCenter,
        GlobalStyles.justifyCenter,
        fill ? styles.absoluteFill : null,
      ]}>
      <ActivityIndicator
        size={'large'}
        animating={true}
        color={theme.contrastColor}
      />
    </View>
  );
});

export default Loading;
