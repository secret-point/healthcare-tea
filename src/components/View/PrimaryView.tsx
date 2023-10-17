import React from 'react';
import { View, ViewProps } from 'react-native';
import { useAppTheme } from '~Root/services/theme/hook';

const PrimaryView: React.FC<ViewProps> = ({ style, ...props }) => {
  const { theme } = useAppTheme();

  return (
    <View style={[{ backgroundColor: theme.primaryColor }, style]} {...props} />
  );
};

export default PrimaryView;
