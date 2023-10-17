import React, { memo } from 'react';
import {
  ActivityIndicator,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from 'react-native';

import styles from './styles';
import Paragraph, {
  ColorVariant,
  ParagraphProps,
} from '~Root/components/Paragraph';
import { GlobalStyles } from '~Root/config';
import { useAppTheme } from '~Root/services/theme/hook';
import adjust from '~Root/utils/adjust';

interface ButtonProps extends ParagraphProps {
  onPress?: any;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  isIconLeft?: React.ReactNode;
  isIconRight?: React.ReactNode;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  onPress = () => {},
  containerStyle = {},
  disabled = false,
  isIconLeft,
  isIconRight,
  children,
  ...rest
}) => {
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress} activeOpacity={0.7}>
      <View style={[styles.containerCommonStyle, containerStyle]}>
        {isIconLeft && isIconLeft}
        <Paragraph {...rest} />
        {isIconRight && isIconRight}
        {children}
      </View>
    </TouchableOpacity>
  );
};

interface LayoutButtonProps extends ButtonProps {
  small?: boolean;
  loading?: boolean;
}

export const LayoutButton = ({
  small = false,
  containerStyle,
  children,
  loading,
  ...rest
}: LayoutButtonProps) => {
  return (
    <Button
      medium
      textWhite
      h5={!small}
      p={small}
      textCenter
      containerStyle={[
        small ? GlobalStyles.pv3 : GlobalStyles.pv9,
        small ? GlobalStyles.ph10 : GlobalStyles.ph22,
        {
          borderRadius: adjust(small ? 3 : 8),
        },
        GlobalStyles.flexRow,
        GlobalStyles.itemsCenter,
        GlobalStyles.justifyCenter,
        GlobalStyles.border1,
        GlobalStyles.borderTransparent,
        GlobalStyles.relative,
        containerStyle,
        loading ? GlobalStyles.bgDisabled : null,
      ]}
      disabled={loading}
      {...rest}>
      {loading && (
        <ActivityIndicator
          size="large"
          color="#000"
          style={[GlobalStyles.absolute, GlobalStyles.selfCenter]}
        />
      )}
      {children}
    </Button>
  );
};

export const PrimaryButton = memo(
  ({ containerStyle, disabled, ...rest }: LayoutButtonProps) => {
    const { globalStyles } = useAppTheme(true);

    return (
      <LayoutButton
        disabled={disabled}
        containerStyle={[
          disabled ? GlobalStyles.bgDisabled : globalStyles.bgExtra1,
          disabled ? GlobalStyles.borderDisabled : globalStyles.borderExtra1,
          containerStyle,
        ]}
        {...rest}
      />
    );
  },
);

export const FlatButton = memo(
  ({ containerStyle, ...rest }: LayoutButtonProps) => {
    return (
      <LayoutButton
        containerStyle={[
          GlobalStyles.bgTransparent,
          GlobalStyles.ph0,
          containerStyle,
        ]}
        {...rest}
      />
    );
  },
);

export const BorderPrimaryButton = memo(
  ({
    containerStyle,
    colorVariant = ColorVariant.EXTRA1,
    ...rest
  }: LayoutButtonProps) => {
    const { globalStyles } = useAppTheme(true);

    return (
      <LayoutButton
        containerStyle={[
          GlobalStyles.bgTransparent,
          GlobalStyles.border1,
          globalStyles.borderExtra1,
          containerStyle,
        ]}
        colorVariant={colorVariant}
        {...rest}
      />
    );
  },
);

export const AddButton = memo((props: TouchableOpacityProps) => {
  const { globalStyles } = useAppTheme(true);
  return (
    <TouchableOpacity
      style={[
        GlobalStyles.itemsCenter,
        GlobalStyles.justifyCenter,
        globalStyles.bgExtra1,
        styles.addButton,
      ]}
      {...props}>
      <Paragraph
        regular
        colorVariant={ColorVariant.CONTRAST}
        title="+"
        textCenter
        style={styles.addButtonText}
      />
    </TouchableOpacity>
  );
});

export default Button;
