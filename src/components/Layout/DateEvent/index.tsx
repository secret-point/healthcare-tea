import { GlobalStyles } from '~Root/config';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Paragraph } from '~Root/components';
import React, { memo, useMemo } from 'react';
import { useAppTheme } from '~Root/services/theme/hook';
import { toMoment } from '~Root/utils/date';
import styles from './styles';
import { ColorVariant } from '~Root/components/Paragraph';

interface DateEventProps {
  onPressItem?: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  startDate: Date;
  endDate: Date;
  title?: string;
  description?: string;
  active?: boolean;
}

const DateEvent = memo(
  ({
    onPressItem,
    containerStyle,
    startDate,
    endDate,
    title,
    description,
    active,
  }: DateEventProps) => {
    const { globalStyles } = useAppTheme(true);
    const formatStartDate = useMemo(() => toMoment(startDate), [startDate]);
    const formatEndDate = useMemo(() => toMoment(endDate), [endDate]);

    return (
      <TouchableOpacity
        onPress={onPressItem}
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.justifyBetween,
          containerStyle,
        ]}>
        <View
          style={[
            active ? globalStyles.bgExtra1 : globalStyles.bgExtra6,
            GlobalStyles.rounded8,
            GlobalStyles.itemsCenter,
            GlobalStyles.justifyCenter,
            GlobalStyles.mr8,
            GlobalStyles.ph5,
            GlobalStyles.pv10,
          ]}>
          <Paragraph
            semibold
            colorVariant={active ? ColorVariant.CONTRAST : ColorVariant.FRAME}
            title={`${formatStartDate.date()}`}
          />
          <Paragraph
            semibold
            colorVariant={active ? ColorVariant.CONTRAST : ColorVariant.FRAME}
            title={`${formatStartDate.format('MMM').toUpperCase()}`}
          />
          <Paragraph
            regular
            colorVariant={active ? ColorVariant.CONTRAST : ColorVariant.FRAME}
            title="|"
          />
          <Paragraph
            semibold
            colorVariant={active ? ColorVariant.CONTRAST : ColorVariant.FRAME}
            title={`${formatStartDate.format('ddd').toUpperCase()}`}
          />
        </View>
        <View
          style={[
            active ? globalStyles.bgExtra2 : globalStyles.bgContrast,
            GlobalStyles.container,
            GlobalStyles.rounded8,
            GlobalStyles.p10,
            GlobalStyles.flexCol,
          ]}>
          <View style={[GlobalStyles.flexRow, GlobalStyles.itemsCenter]}>
            <View
              style={[
                styles.timePoint,
                globalStyles.bgExtra1,
                GlobalStyles.mr5,
              ]}
            />
            <Paragraph
              colorVariant={ColorVariant.FRAME}
              medium
              h6
              title={`${formatStartDate.format(
                'H:mm',
              )} - ${formatEndDate.format('H:mm')}`}
              style={GlobalStyles.font8}
            />
          </View>
          {title && (
            <Paragraph
              colorVariant={ColorVariant.FRAME}
              semibold
              p
              title={title}
              style={GlobalStyles.mb3}
            />
          )}
          {description && (
            <Paragraph
              colorVariant={ColorVariant.FRAME}
              regular
              h6
              title={description}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  },
);

export default DateEvent;
