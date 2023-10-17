import React, { memo } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import styles from './styles';
import { useAppTheme } from '~Root/services/theme/hook';
import { BASE_COLORS, BASE_FONTS, BASE_STYLES } from '~Root/config';
import { CalendarProps } from 'react-native-calendars/src/calendar';

interface Props extends CalendarProps {}

LocaleConfig.locales.en = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dev',
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ],
  dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
};

LocaleConfig.defaultLocale = 'en';

const CalendarPicker = memo((props: Props) => {
  const { theme } = useAppTheme();
  return (
    <Calendar
      firstDay={1}
      monthFormat={'dd MMMM, yyyy'}
      style={styles.container}
      horizontal
      hideArrows
      enableSwipeMonths
      theme={{
        weekVerticalMargin: 0,
        // @ts-ignore
        'stylesheet.calendar.header': {
          week: {
            paddingTop: 7,
            flexDirection: 'row',
            justifyContent: 'space-around',
            borderTopWidth: 1,
            borderTopColor: theme.extra3Color,
          },
        },
        textSectionTitleColor: BASE_COLORS.blackColor,
        calendarBackground: theme.extra2Color,
        dayTextColor: BASE_COLORS.blackColor,
        monthTextColor: BASE_COLORS.blackColor,

        selectedDayTextColor: BASE_COLORS.whiteColor,
        selectedDayBackgroundColor: theme.extra1Color,

        todayTextColor: BASE_COLORS.whiteColor,
        todayBackgroundColor: theme.extra1Color,

        dotColor: theme.extra1Color,
        selectedDotColor: BASE_COLORS.whiteColor,
        todayDotColor: BASE_COLORS.whiteColor,
        disabledDotColor: theme.extra1Color,
        inactiveDotColor: theme.extra1Color,

        textDayStyle: {
          marginBottom: 0,
        },

        textMonthFontFamily: BASE_FONTS.semibold,
        textMonthFontSize: BASE_STYLES.h5,
        textMonthFontWeight: '600',
        textDayHeaderFontFamily: BASE_FONTS.regular,
        textDayHeaderFontWeight: '400',
        textDayHeaderFontSize: BASE_STYLES.h5,
        textDayFontFamily: BASE_FONTS.regular,
        textDayFontWeight: '400',
        textDayFontSize: BASE_STYLES.h5,

        textDisabledColor: '#848484',
      }}
      {...props}
    />
  );
});

export default CalendarPicker;
