import React, { memo } from 'react';
import { GlobalStyles } from '~Root/config';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useAppTheme } from '~Root/services/theme/hook';
import { Paragraph } from '~Root/components';
import { ColorVariant } from '~Root/components/Paragraph';
import Icon from 'react-native-vector-icons/Ionicons';

interface AlertToolBoxProps {
  containerStyle?: StyleProp<ViewStyle>;
  text?: string;
}

const AlertToolBox = memo(({ containerStyle, text }: AlertToolBoxProps) => {
  const { globalStyles, theme } = useAppTheme(true);

  return (
    <View
      style={[
        globalStyles.bgContrast,
        GlobalStyles.rounded,
        GlobalStyles.ph15,
        GlobalStyles.pv12,
        GlobalStyles.flexRow,
        GlobalStyles.justifyBetween,
        GlobalStyles.gap10,
        containerStyle,
      ]}>
      <Icon
        name="alert-circle-outline"
        color={theme.text.hintColor}
        size={20}
      />
      {text && (
        <Paragraph
          colorVariant={ColorVariant.HINT}
          style={GlobalStyles.flexShrink1}
          title={text}
        />
      )}
    </View>
  );
});

export default AlertToolBox;
