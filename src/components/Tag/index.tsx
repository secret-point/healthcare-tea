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

const Tag = memo(({ containerStyle, label, children }: Props) => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  return (
    <View style={[GlobalStyles.itemsStart, containerStyle]}>
      <View
        style={[
          GlobalStyles.ph20,
          GlobalStyles.pv8,
          GlobalStyles.itemsCenter,
          GlobalStyles.justifyCenter,
          GlobalStyles.rounded8,
          styles.tag,
        ]}>
        {label && (
          <Paragraph
            h5
            regular
            colorVariant={ColorVariant.EXTRA4}
            title={label}
          />
        )}
        {children}
      </View>
    </View>
  );
});

export default Tag;
