import React from 'react';
import { View, ViewProps } from 'react-native';
import { useAppTheme } from '~Root/services/theme/hook';

const Extra6View: React.FC<ViewProps> = ({ style, ...props }) => {
  const { theme } = useAppTheme();

  return (
    <View style={[{ backgroundColor: theme.extra6Color }, style]} {...props} />
  );
};

export default Extra6View;
