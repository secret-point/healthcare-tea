import React, { useEffect, useState } from 'react';
import { Switch, SwitchProps } from 'react-native-switch';
import { useAppTheme } from '~Root/services/theme/hook';

const SwitchButton = React.forwardRef<Switch, SwitchProps>(
  ({ value, onValueChange, ...rest }, ref) => {
    const [switchValue, setSwitchValue] = useState<boolean | undefined>(value);

    const { theme } = useAppTheme();

    const onSwitchChange = (newValue?: boolean) => {
      setSwitchValue(newValue);
    };

    useEffect(() => {
      setSwitchValue(value);
    }, [value]);

    useEffect(() => {
      if (onValueChange) {
        onValueChange(!!switchValue);
      }
    }, [onValueChange, switchValue]);

    return (
      <Switch
        ref={ref}
        circleSize={30}
        circleBorderWidth={3}
        circleActiveColor={theme.contrastColor}
        backgroundActive={theme.extra1Color}
        circleBorderActiveColor={theme.extra1Color}
        circleInActiveColor={theme.contrastColor}
        backgroundInactive={theme.borderColor}
        circleBorderInactiveColor={theme.borderColor}
        changeValueImmediately={true}
        renderActiveText={false}
        renderInActiveText={false}
        switchLeftPx={2}
        switchRightPx={2}
        switchWidthMultiplier={2}
        switchBorderRadius={30}
        onValueChange={onSwitchChange}
        value={switchValue}
        {...rest}
      />
    );
  },
);

export default SwitchButton;
