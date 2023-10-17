import React, { memo } from 'react';
import { TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Link, Paragraph } from '~Root/components';
import createStyles from './styles';
import { useAppTheme } from '~Root/services/theme/hook';

interface Props {
  isChecked: boolean;
  onChange?: (isChecked: boolean, item: any) => void;
  item?: any;
  style?: ViewStyle;
  iconStyle?: ViewStyle;
  textStyle?: TextStyle;
  text?: string | null;
  onPressText?: () => void;
}

const CheckBox = memo(
  ({
    isChecked = false,
    onChange = () => {},
    item,
    style = {},
    iconStyle = {},
    textStyle = {},
    text,
    onPressText,
  }: Props) => {
    const { theme } = useAppTheme();

    const styles = createStyles(theme, isChecked);

    return (
      <TouchableOpacity
        style={[styles.checkBoxContainer, style]}
        onPress={() => onChange(!isChecked, item)}>
        <View style={[styles.checkBox, iconStyle]}>
          {isChecked && (
            <Icon
              size={15}
              color={theme.contrastColor}
              name="checkmark-sharp"
            />
          )}
        </View>
        {text &&
          (onPressText ? (
            <Link
              textWhite
              p
              style={textStyle}
              title={text}
              onPress={onPressText}
            />
          ) : (
            <Paragraph textWhite p style={textStyle} title={text} />
          ))}
      </TouchableOpacity>
    );
  },
);

export default CheckBox;
