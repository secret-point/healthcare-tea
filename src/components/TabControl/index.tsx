import React, { memo } from 'react';
import SegmentedControl, {
  SegmentedControlProps,
} from '@react-native-segmented-control/segmented-control';
import { useAppTheme } from '~Root/services/theme/hook';
import createStyles from './styles';

interface Props extends SegmentedControlProps {}

const TabControl = memo(({ style, ...rest }: Props) => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  return (
    <SegmentedControl
      backgroundColor={theme.extra6Color}
      fontStyle={styles.fontStyle}
      activeFontStyle={styles.activeFontStyle}
      style={[style]}
      {...rest}
    />
  );
});

export default TabControl;
