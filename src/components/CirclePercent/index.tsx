import React, { memo } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Circle } from 'react-native-svg';
import { useAppTheme } from '~Root/services/theme/hook';
import { Paragraph } from '~Root/components';
import { View } from 'react-native';
import { BASE_COLORS, GlobalStyles } from '~Root/config';
import createStyles from './styles';

interface Props {
  label?: string | null;
  number?: number;
}

const CirclePercent = memo(({ label, number = 0 }: Props) => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  const roundedNumber = Math.ceil(number);

  return (
    <AnimatedCircularProgress
      size={75}
      width={5}
      fill={roundedNumber}
      lineCap="round"
      rotation={270}
      tintColor={theme.extra1Color}
      padding={5}
      backgroundColor={BASE_COLORS.gray}
      childrenContainerStyle={styles.childrenContainerStyle}
      renderCap={({ center }) => (
        <Circle cx={center.x} cy={center.y} r="4" fill="#FFFFFF" />
      )}>
      {() => (
        <View
          style={[
            styles.viewContainer,
            GlobalStyles.widthFull,
            GlobalStyles.heightFull,
            GlobalStyles.pt2,
            GlobalStyles.container,
            GlobalStyles.itemsCenter,
            GlobalStyles.justifyCenter,
          ]}>
          {label && (
            <Paragraph
              h7
              title={label.toUpperCase()}
              style={{ color: theme.textCircleColor }}
            />
          )}
          <Paragraph
            h7
            title={`${roundedNumber}%`}
            style={{ color: theme.textCircleColor }}
          />
        </View>
      )}
    </AnimatedCircularProgress>
  );
});

export default CirclePercent;
