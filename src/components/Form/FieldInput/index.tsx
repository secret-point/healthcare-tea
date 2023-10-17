import React, { useMemo } from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './styles';
import { Link, Paragraph } from '~Root/components';
import { BASE_COLORS, GlobalStyles } from '~Root/config';
import { ColorVariant } from '~Root/components/Paragraph';

export interface FieldInputProps extends Omit<TextInputProps, 'placeholder'> {
  icon?: React.ReactNode;
  label?: string | null;
  linkText?: string | null;
  placeholder?: string | null;
  error?: string | null;
  styleContainer?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  linkStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  textErrorStyle?: StyleProp<TextStyle>;
  onPressLink?: () => void;
  onPressIcon?: () => void;
}

const FieldInput = React.forwardRef<TextInput, FieldInputProps>(
  (
    {
      icon,
      label,
      linkText,
      placeholder,
      error,
      style,
      styleContainer,
      labelStyle,
      linkStyle,
      errorStyle,
      textErrorStyle,
      onPressLink,
      onPressIcon,
      selectionColor,
      placeholderTextColor,
      ...rest
    },
    ref,
  ) => {
    const inputStyles = useMemo(() => {
      let inputStyle = [styles.inputStyle, style];
      if (error) {
        inputStyle = [...inputStyle, styles.inputErrorStyle, errorStyle];
      }

      return inputStyle;
    }, [error, errorStyle, style]);

    const hasText = Boolean(label) || Boolean(linkText);

    return (
      <View style={[styles.container, styleContainer]}>
        {hasText && (
          <View
            style={[
              GlobalStyles.flexRow,
              GlobalStyles.itemsCenter,
              GlobalStyles.justifyBetween,
              GlobalStyles.mb5,
            ]}>
            <Paragraph
              p
              colorVariant={ColorVariant.CONTRAST}
              title={label}
              style={labelStyle}
            />
            <Link
              p
              colorVariant={ColorVariant.CONTRAST}
              title={linkText}
              style={linkStyle}
              onPress={onPressLink}
            />
          </View>
        )}
        <View style={GlobalStyles.container}>
          {icon && (
            <TouchableOpacity
              style={styles.rightIconStyle}
              onPress={onPressIcon}>
              {icon}
            </TouchableOpacity>
          )}
          <TextInput
            ref={ref}
            style={inputStyles}
            selectionColor={selectionColor || BASE_COLORS.blackColor}
            placeholderTextColor={
              placeholderTextColor || BASE_COLORS.placeholderColor
            }
            placeholder={placeholder || undefined}
            {...rest}
          />
        </View>

        {Boolean(error) && (
          <Paragraph
            p
            style={[styles.textError, textErrorStyle]}
            title={error}
          />
        )}
      </View>
    );
  },
);

export default FieldInput;
