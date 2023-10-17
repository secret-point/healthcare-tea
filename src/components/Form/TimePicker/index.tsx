import React, { useMemo, useState } from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import moment from 'moment';
import RNDatePicker, { DatePickerProps } from 'react-native-date-picker';
import styles from './styles';
import { Paragraph } from '~Root/components';
import { GlobalStyles, IMAGES } from '~Root/config';
import { ColorVariant } from '~Root/components/Paragraph';
import { useTranslation } from 'react-i18next';
import { DATE_TIME_FORMAT } from '~Root/config/constants';
import FastImage from '~Root/components/FastImage';

export interface Props extends Omit<DatePickerProps, 'date'> {
  date?: Date | null;
  label?: string | null;
  formatTime?: ((date: Date) => string) | string | null;
  labelColor?: ColorVariant;
  placeholder?: string | null;
  error?: string | null;
  onChangeDate?: (date: Date) => void;
  styleContainer?: StyleProp<ViewStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  errorStyle?: StyleProp<TextStyle>;
  textErrorStyle?: StyleProp<TextStyle>;
}

const TimePicker = React.forwardRef<RNDatePicker, Props>(
  (
    {
      date,
      label,
      formatTime = DATE_TIME_FORMAT.SHORT_TIME,
      labelColor = ColorVariant.EXTRA2,
      placeholder,
      error,
      onChangeDate,
      styleContainer,
      buttonStyle,
      labelStyle,
      errorStyle,
      textErrorStyle,
      ...rest
    },
    ref,
  ) => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    const buttonStyles = useMemo(() => {
      let style = [styles.buttonStyle, buttonStyle];
      if (error) {
        style = [buttonStyle, styles.buttonErrorStyle, errorStyle];
      }

      return style;
    }, [error, errorStyle, buttonStyle]);

    const formattedDate = useMemo(() => {
      if (!date || !formatTime) {
        return null;
      }

      if (typeof formatTime === 'function') {
        return formatTime(date);
      }

      return moment(date).format(formatTime);
    }, [date, formatTime]);

    return (
      <View style={[styles.container, styleContainer]}>
        {label && (
          <View
            style={[
              GlobalStyles.flexRow,
              GlobalStyles.itemsCenter,
              GlobalStyles.justifyBetween,
              GlobalStyles.mb5,
            ]}>
            <Paragraph
              p
              colorVariant={labelColor}
              title={label}
              style={labelStyle}
            />
          </View>
        )}

        <View style={GlobalStyles.container}>
          <TouchableOpacity
            style={buttonStyles}
            onPress={() => {
              setOpen(true);
            }}>
            <FastImage
              source={IMAGES.clock}
              resizeMode={FastImage.resizeMode.cover}
              style={GlobalStyles.icon14x14}
            />
            <Paragraph
              medium
              p
              colorVariant={ColorVariant.REV_CONTRAST}
              title={formattedDate || placeholder || t('select_time')}
            />
          </TouchableOpacity>
        </View>

        <RNDatePicker
          modal
          ref={ref}
          open={open}
          onConfirm={value => {
            setOpen(false);
            onChangeDate && onChangeDate(value);
          }}
          onCancel={() => {
            setOpen(false);
          }}
          date={date || new Date()}
          mode="time"
          {...rest}
        />

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

export default TimePicker;
