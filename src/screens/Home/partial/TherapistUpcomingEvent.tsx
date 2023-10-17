import React from 'react';
import { DateEvent, PrimaryToolBox, SectionHeading } from '~Root/components';
import { GlobalStyles } from '~Root/config';
import { useTranslation } from 'react-i18next';
import HomePatient from '~Root/screens/Home/partial/Patient';
import { navigate } from '~Root/navigation';
import { AppRoute } from '~Root/navigation/AppRoute';

interface Props {
  onBookingAppointment: () => void;
  onCalendar: () => void;
}

const TherapistUpcomingEvent = ({
  onBookingAppointment,
  onCalendar,
}: Props) => {
  const { t } = useTranslation();

  const onPressDataEventItem = () => {
    navigate(AppRoute.CALENDAR_NAVIGATOR, {
      screen: AppRoute.CALENDAR_EVENT,
      initial: false,
    });
  };

  return (
    <>
      <SectionHeading
        title="Today, Oct 14"
        containerStyles={GlobalStyles.mb15}
      />
      <DateEvent
        active
        startDate={new Date()}
        endDate={new Date()}
        title="Counselling with Samanta Grey!"
        description="Find suitable therapists here"
        containerStyle={GlobalStyles.mb15}
        onPressItem={onPressDataEventItem}
      />
      <SectionHeading
        title="Wednesday, Oct 15"
        containerStyles={GlobalStyles.mb15}
      />
      <DateEvent
        startDate={new Date()}
        endDate={new Date()}
        title="Session with Adam Green."
        containerStyle={GlobalStyles.mb15}
        onPressItem={onPressDataEventItem}
      />
      <DateEvent
        startDate={new Date()}
        endDate={new Date()}
        title="Group session!"
        containerStyle={GlobalStyles.mb15}
        onPressItem={onPressDataEventItem}
      />
      <SectionHeading title="Patients" linkText={t('see_all')} />
      <HomePatient />
      <SectionHeading
        title="Create content or events"
        linkText={t('see_all')}
        onPressLink={onCalendar}
      />
      <PrimaryToolBox
        title="Would you like to create content or an event?"
        onNextPress={onBookingAppointment}
        containerStyle={GlobalStyles.mb15}
      />
    </>
  );
};

export default TherapistUpcomingEvent;
