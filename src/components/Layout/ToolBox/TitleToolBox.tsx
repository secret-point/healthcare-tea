import React, { memo, ReactElement } from 'react';
import { GlobalStyles } from '~Root/config';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { Paragraph } from '~Root/components';
import { useAppTheme } from '~Root/services/theme/hook';
import { ColorVariant } from '~Root/components/Paragraph';

interface TitleToolBox {
  containerStyle?: StyleProp<ViewStyle>;
  title?: string;
  children?: ReactElement | ReactElement[];
  onPress?: () => void;
}

const TitleToolBox = memo(
  ({ containerStyle, title, children, onPress }: TitleToolBox) => {
    const { globalStyles } = useAppTheme(true);

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[
          globalStyles.bgExtra3,
          GlobalStyles.rounded,
          GlobalStyles.p15,
          containerStyle,
        ]}>
        {title && (
          <Paragraph
            colorVariant={ColorVariant.EXTRA2}
            semibold
            h5
            title={title}
          />
        )}
        {children}
      </TouchableOpacity>
    );
  },
);

export default TitleToolBox;
