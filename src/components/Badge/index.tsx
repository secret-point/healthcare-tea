import React, { memo, ReactElement } from 'react';
import { View, ViewStyle } from 'react-native';
import { useAppTheme } from '~Root/services/theme/hook';
import { Paragraph } from '~Root/components';
import { ColorVariant } from '~Root/components/Paragraph';
import { GlobalStyles } from '~Root/config';
import createStyles from './styles';

type Props = {
  containerStyle?: ViewStyle;
  label?: string | number | null;
  children?: ReactElement;
};

const Badge = memo(({ containerStyle, label, children }: Props) => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  return (
    <View style={[GlobalStyles.itemsStart, containerStyle]}>
      <View
        style={[
          GlobalStyles.ph8,
          GlobalStyles.pv3,
          GlobalStyles.itemsCenter,
          GlobalStyles.justifyCenter,
          GlobalStyles.rounded8,
          styles.badge,
        ]}>
        {label && (
          <Paragraph
            p
            semibold
            colorVariant={ColorVariant.CONTRAST}
            title={label}
          />
        )}
        {children}
      </View>
    </View>
  );
});

export default Badge;
