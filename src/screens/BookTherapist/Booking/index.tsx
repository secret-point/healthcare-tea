import React, { useCallback, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { GlobalStyles } from '~Root/config/styles';
import {
  ColorVariant,
  DatePicker,
  DropDown,
  Extra6View,
  Header,
  Link,
  Paragraph,
  PrimaryButton,
  UserToolBox,
} from '~Root/components';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { goBack, navigate } from '~Root/navigation';
import { IDataDropDown } from '~Root/utils';
import FastImage from '~Root/components/FastImage';
import { IMAGES } from '~Root/config';
import { useAppTheme } from '~Root/services/theme/hook';
import createStyles from './styles';
import { AppRoute } from '~Root/navigation/AppRoute';

const MOCK_TYPE_APPOINTMENT: ITypeOfAppointment[] = [
  { id: 1, name: 'Video call', type: 'video' },
  { id: 2, name: 'Record', type: 'video' },
];

interface ITypeOfAppointment extends IDataDropDown {
  type: string;
}

interface ITime {
  name: string;
  value: number;
}

const times: ITime[] = [
  { name: '7:00 AM', value: 7 },
  { name: '9:00 AM', value: 9 },
  { name: '10:00 AM', value: 10 },
  { name: '11:00 AM', value: 12 },
  { name: '2:00 PM', value: 14 },
  { name: '4:00 PM', value: 16 },
  { name: '6:00 PM', value: 18 },
];

const BookTherapistBooking = () => {
  const { t } = useTranslation();
  const { theme, globalStyles } = useAppTheme(true);

  const styles = createStyles(theme);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<number | null>(null);

  const onSelectTime = (time: ITime) => () => {
    setSelectedTime(time.value);
  };

  const onApply = () => {
    navigate(AppRoute.BOOK_THERAPIST_PAYMENT);
  };

  const renderTypeAppointmentSelected = useCallback(
    (item?: ITypeOfAppointment) => {
      if (!item) {
        return (
          <Paragraph
            p
            medium
            colorVariant={ColorVariant.EXTRA4}
            title={t('please_select')}
          />
        );
      }

      return (
        <>
          <FastImage
            source={IMAGES.iconMovieCamera}
            resizeMode={FastImage.resizeMode.cover}
            style={GlobalStyles.icon14x14}
          />
          <Paragraph
            p
            medium
            colorVariant={ColorVariant.EXTRA4}
            title={item.name}
          />
        </>
      );
    },
    [t],
  );

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={goBack}
        isBack={true}
        title={t('book_your_therapist')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={GlobalStyles.ph15}>
        <UserToolBox
          label={t('doctor')}
          name="Dr. Maria Hudson"
          major="Psychologist"
          containerStyle={GlobalStyles.mb10}
        />
        <DropDown
          label={t('type_of_appointment')}
          data={MOCK_TYPE_APPOINTMENT}
          customSelectedItem={renderTypeAppointmentSelected}
          onValueChange={item => console.log(item)}
          containerStyle={GlobalStyles.mb10}
          toggleContainerStyle={globalStyles.bgExtra6}
        />
        <DatePicker
          date={selectedDate}
          onChangeDate={setSelectedDate}
          label={t('date_of_appointment')}
          styleContainer={GlobalStyles.mb10}
          buttonStyle={globalStyles.bgExtra6}
        />
        <Paragraph
          regular
          colorVariant={ColorVariant.EXTRA2}
          p
          style={GlobalStyles.mb5}
          title="Available slots"
        />
        <Extra6View style={styles.listContainer}>
          {times.map(time => (
            <View style={styles.slotItem} key={time.value}>
              <View
                style={[
                  styles.slotItemContent,
                  selectedTime === time.value
                    ? styles.slotItemContentActive
                    : null,
                ]}>
                <Link
                  medium
                  h5
                  colorVariant={
                    selectedTime === time.value
                      ? ColorVariant.CONTRAST
                      : ColorVariant.EXTRA4
                  }
                  title={time.name}
                  textCenter
                  onPress={onSelectTime(time)}
                />
              </View>
            </View>
          ))}
        </Extra6View>

        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.justifyEnd,
            GlobalStyles.mt15,
          ]}>
          <PrimaryButton title={t('apply')} onPress={onApply} />
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default BookTherapistBooking;
