import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { AppRoute } from '~Root/navigation/AppRoute';
import {
  BookTherapistParamsList,
  MainNavigatorParamsList,
} from '~Root/navigation/config';
import BookTherapistScreen from '~Root/screens/BookTherapist';
import BookTherapistListScreen from '~Root/screens/BookTherapist/List';
import BookTherapistBooking from '~Root/screens/BookTherapist/Booking';
import TherapistProfileScreen from '~Root/screens/TherapistProfile';
import BookingTherapistPayment from '~Root/screens/BookTherapist/Payment';

const BookTherapistStack =
  createNativeStackNavigator<BookTherapistParamsList>();

type BookTherapistNavigatorProps = BottomTabScreenProps<
  MainNavigatorParamsList,
  AppRoute.BOOK_THERAPIST_NAVIGATOR
>;

const BookTherapistRoute = (props: BookTherapistNavigatorProps) => {
  return (
    <BookTherapistStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      {...props}>
      <BookTherapistStack.Screen
        name={AppRoute.BOOK_THERAPIST}
        component={BookTherapistScreen}
      />
      <BookTherapistStack.Screen
        name={AppRoute.THERAPIST_DETAIL}
        component={TherapistProfileScreen}
      />
      <BookTherapistStack.Screen
        name={AppRoute.BOOK_THERAPIST_LIST}
        component={BookTherapistListScreen}
      />
      <BookTherapistStack.Screen
        name={AppRoute.BOOK_THERAPIST_BOOKING}
        component={BookTherapistBooking}
      />
      <BookTherapistStack.Screen
        name={AppRoute.BOOK_THERAPIST_PAYMENT}
        component={BookingTherapistPayment}
      />
    </BookTherapistStack.Navigator>
  );
};

export default BookTherapistRoute;
