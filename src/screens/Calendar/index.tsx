import React, { useState, useMemo } from 'react';
import { FlatList, ScrollView, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import { forOwn } from 'lodash';
import { toMoment } from '~Root/utils/date';

import { GlobalStyles } from '~Root/config/styles';
import {
  DateEvent,
  Header,
  SectionHeading,
  TabControl,
  CalendarPicker,
} from '~Root/components';
import { DateData } from 'react-native-calendars/src';

import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { goBack, navigate } from '~Root/navigation';
import Calendar24X24 from '~Root/assets/icons/calendar-24x24.svg';
import { useAppTheme } from '~Root/services/theme/hook';
import DateItem from '~Root/components/Layout/DateEvent/DayItem';
import { AppRoute } from '~Root/navigation/AppRoute';
import { useAuth } from '~Root/services/auth/hook';
import { useQuery } from '@tanstack/react-query';
import { IEvent } from '~Root/services/event/types';
import { DATE_TIME_FORMAT } from '~Root/config/constants';

const getListDaysOfWeek = (dateStr: string) => {
  const currentDate = moment(dateStr);
  const weekStart = currentDate.clone().startOf('week');
  let days = [];
  for (let i = 0; i <= 6; i++) {
    days.push(moment(weekStart).add(i, 'days').toDate());
  }
  return days;
};

const CalendarScreen = () => {
  const { t, i18n } = useTranslation();
  const { theme } = useAppTheme(true);

  const [isCalendar, setIsCalendar] = useState(false);
  const [status, setStatus] = useState<string>('Upcoming');
  const [selectedDate, setSelectedDate] = useState<string>(
    moment().format(DATE_TIME_FORMAT.SERVER_DATE),
  );

  const fromDate = useMemo(() => {
    return moment(selectedDate)
      .clone()
      .startOf('week')
      .format(DATE_TIME_FORMAT.SERVER_DATE);
  }, [selectedDate]);
  const toDate = useMemo(() => {
    return moment(selectedDate)
      .clone()
      .endOf('week')
      .format(DATE_TIME_FORMAT.SERVER_DATE);
  }, [selectedDate]);
  const { auth } = useAuth();

  const {
    data: res,
    isSuccess,
    refetch,
  } = useQuery<{
    data: {
      [key: string]: IEvent[];
    };
  }>({
    queryKey: [
      `/events/events/user/${auth.id}/by-range?from=${fromDate}&to=${toDate}`,
    ],
  });

  const onToggleCalendar = () => {
    setIsCalendar(!isCalendar);
    refetch();
  };

  const onPressDataEventItem = () => {
    navigate(AppRoute.CALENDAR_EVENT);
  };
  const onPressDayWeek = (date: Date) => {
    setSelectedDate(moment(date).format(DATE_TIME_FORMAT.SERVER_DATE));
  };

  const listEvents = useMemo(() => {
    const events: IEvent[] = [];
    if (isSuccess) {
      forOwn(res?.data, (value, eventDate) => {
        value.map((e, i) => {
          if (status === t('upcoming') && e.status === 'S') {
            events.push({ ...e, eventDate, isShowDayHeader: i === 0 });
          } else if (status === t('canceled') && e.status === 'C') {
            events.push({ ...e, eventDate, isShowDayHeader: i === 0 });
          } else if (status === t('completed') && e.status === 'F') {
            events.push({ ...e, eventDate, isShowDayHeader: i === 0 });
          }
        });
      });
    }
    return events;
  }, [isSuccess, res, status, t]);

  const getHeadingTitleDay = (date: Date) => {
    const dateMoment = toMoment(date, i18n.language);
    if (dateMoment.isSame(new Date(), 'day')) {
      return t('today') + ', ' + dateMoment.format('MMM D');
    } else {
      return dateMoment.format('dddd, MMM D');
    }
  };

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={goBack}
        isBack={true}
        title={t('upcoming_events')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={GlobalStyles.ph15}>
        <SectionHeading
          title={t('calendar')}
          LinkComponent={
            <TouchableOpacity onPress={onToggleCalendar}>
              <Calendar24X24 primaryColor={theme.contrastColor} />
            </TouchableOpacity>
          }
        />
        <View style={GlobalStyles.mb20}>
          {isCalendar ? (
            <CalendarPicker
              onDayPress={(date: DateData) => {
                setSelectedDate(date.dateString);
                setIsCalendar(false);
              }}
            />
          ) : (
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={getListDaysOfWeek(selectedDate)}
              contentContainerStyle={GlobalStyles.gap10}
              keyExtractor={(item, index) => `${index.toString()}`}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onPressDayWeek(item)}>
                  <DateItem
                    date={item}
                    selectedDate={moment(selectedDate).toDate()}
                  />
                </TouchableOpacity>
              )}
            />
          )}
        </View>

        <SectionHeading title={t('schedule')} />

        <TabControl
          values={[t('upcoming'), t('completed'), t('canceled')]}
          selectedIndex={
            status === t('upcoming') ? 0 : status === t('completed') ? 1 : 2
          }
          style={GlobalStyles.mb20}
          onValueChange={(tab: string) => {
            setStatus(tab);
          }}
        />

        {isSuccess &&
          listEvents.map((event: IEvent) => (
            <React.Fragment key={event.channelId}>
              {event.isShowDayHeader && (
                <SectionHeading
                  title={getHeadingTitleDay(event.startTime)}
                  containerStyles={GlobalStyles.mb15}
                />
              )}
              <DateEvent
                onPressItem={onPressDataEventItem}
                active={toMoment(event.startTime).isSame(new Date(), 'day')}
                startDate={event.startTime}
                endDate={event.endTime}
                title={event.name}
                description={event.description}
                containerStyle={GlobalStyles.mb15}
              />
            </React.Fragment>
          ))}
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default CalendarScreen;
