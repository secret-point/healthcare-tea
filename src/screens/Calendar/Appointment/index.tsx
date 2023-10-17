import React, { useCallback, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { GlobalStyles } from '~Root/config/styles';
import {
  Header,
  DatePicker,
  TimePicker,
  DropDown,
  UserToolBox,
  AlertToolBox,
} from '~Root/components';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { goBack } from '~Root/navigation';
import { IDataDropDown } from '~Root/utils';
import Paragraph, { ColorVariant } from '../../../components/Paragraph';
import FastImage from '~Root/components/FastImage';
import { IMAGES } from '~Root/config';
import { BorderPrimaryButton, PrimaryButton } from '~Root/components/Button';
import styles from './styles';
import { useAppTheme } from '~Root/services/theme/hook';

const MOCK_TYPE_APPOINTMENT: ITypeOfAppointment[] = [
  { id: 1, name: 'Video call', type: 'video' },
  { id: 2, name: 'Record', type: 'video' },
];

interface ITypeOfAppointment extends IDataDropDown {
  type: string;
}

const CalendarAppointmentScreen = () => {
  const { t } = useTranslation();
  const { globalStyles } = useAppTheme(true);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

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
        title={t('appointment')}
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
        <View style={[GlobalStyles.flexRow, GlobalStyles.mb50]}>
          <TimePicker
            date={selectedTime}
            onChangeDate={setSelectedTime}
            label={t('time_of_appointment')}
            buttonStyle={globalStyles.bgExtra6}
          />
          <View style={GlobalStyles.container} />
        </View>
        <AlertToolBox
          text="You can cancel up to 24 hours before your session, otherwise full payment will be deducted"
          containerStyle={GlobalStyles.mb20}
        />
        <View style={[GlobalStyles.flexRow, GlobalStyles.justifyBetween]}>
          <BorderPrimaryButton
            title={t('cancel')}
            onPress={goBack}
            containerStyle={styles.buttonStyle}
          />
          <PrimaryButton
            title={t('join')}
            containerStyle={styles.buttonStyle}
          />
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default CalendarAppointmentScreen;
