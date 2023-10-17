import { GlobalStyles } from '~Root/config';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Paragraph } from '~Root/components';
import React, { memo, useMemo } from 'react';
import { useAppTheme } from '~Root/services/theme/hook';
import { toMoment } from '~Root/utils/date';
import { ColorVariant } from '~Root/components/Paragraph';
import styles from './styles';

interface DateItemProps {
  containerStyle?: StyleProp<ViewStyle>;
  date: Date;
  selectedDate?: Date;
  onPress?: () => void;
}

const DateItem = memo(
  ({ containerStyle, date, selectedDate }: DateItemProps) => {
    const { globalStyles } = useAppTheme(true);
    const formatDate = useMemo(() => toMoment(date), [date]);

    const isToday = useMemo(() => {
      return formatDate.isSame(new Date(), 'day');
    }, [formatDate]);
    const isSlected = useMemo(() => {
      return formatDate.isSame(selectedDate, 'day');
    }, [formatDate, selectedDate]);

    return (
      <View style={[GlobalStyles.itemsStart, containerStyle]}>
        <View
          style={[
            isToday || isSlected
              ? globalStyles.bgExtra1
              : globalStyles.bgExtra6,
            GlobalStyles.rounded8,
            GlobalStyles.itemsCenter,
            GlobalStyles.justifyCenter,
            GlobalStyles.pt8,
            GlobalStyles.pb10,
            styles.day,
          ]}>
          <Paragraph
            bold
            h4
            colorVariant={
              isToday ? ColorVariant.CONTRAST : ColorVariant.REV_CONTRAST
            }
            title={formatDate.date()}
          />
          <Paragraph
            medium
            p
            colorVariant={
              isToday ? ColorVariant.CONTRAST : ColorVariant.REV_CONTRAST
            }
            title={formatDate.format('ddd')}
          />
        </View>
      </View>
    );
  },
);

export default DateItem;
