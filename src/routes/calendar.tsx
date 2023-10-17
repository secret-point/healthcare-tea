import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { AppRoute } from '~Root/navigation/AppRoute';
import {
  BottomTabParamsList,
  CalendarNavigatorParamsList,
} from '~Root/navigation/config';
import CalendarScreen from '~Root/screens/Calendar';
import CalendarAppointmentScreen from '~Root/screens/Calendar/Appointment';
import CalendarEventScreen from '~Root/screens/Calendar/Event';
import TherapistProfileScreen from '~Root/screens/TherapistProfile';

const CalendarStack = createNativeStackNavigator<CalendarNavigatorParamsList>();

type CalendarNavigatorProps = BottomTabScreenProps<
  BottomTabParamsList,
  AppRoute.CALENDAR_NAVIGATOR
>;

const CalendarRoute = (props: CalendarNavigatorProps) => {
  return (
    <CalendarStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      {...props}>
      <CalendarStack.Screen
        name={AppRoute.CALENDAR}
        component={CalendarScreen}
      />
      <CalendarStack.Screen
        name={AppRoute.CALENDAR_APPOINTMENT}
        component={CalendarAppointmentScreen}
      />
      <CalendarStack.Screen
        name={AppRoute.CALENDAR_EVENT}
        component={CalendarEventScreen}
      />
      <CalendarStack.Screen
        name={AppRoute.THERAPIST_DETAIL}
        component={TherapistProfileScreen}
      />
    </CalendarStack.Navigator>
  );
};

export default CalendarRoute;
