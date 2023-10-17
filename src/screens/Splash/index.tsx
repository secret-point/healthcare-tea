import React from 'react';
import { ActivityIndicator } from 'react-native';

import { GlobalStyles } from '~Root/config/styles';
import PrimaryView from '~Root/components/View/PrimaryView';
import { useAppTheme } from '~Root/services/theme/hook';

const SplashScreen = () => {
  const { theme } = useAppTheme();

  return (
    <PrimaryView style={[GlobalStyles.container, GlobalStyles.justifyCenter]}>
      <ActivityIndicator color={theme.revContrastColor} size="large" />
    </PrimaryView>
  );
};

export default SplashScreen;
