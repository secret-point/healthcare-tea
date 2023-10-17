import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { useAuth } from '~Root/services/auth/hook';
import { RoleId } from '~Root/services/auth/types';
import { AppRoute } from '~Root/navigation/AppRoute';
import {
  BottomTabParamsList,
  MainNavigatorParamsList,
} from '~Root/navigation/config';
import HomeScreen from '~Root/screens/Home';
import HomeDailyQuotesScreen from '~Root/screens/Home/DailyQuotes';
import DepressionScreen from '~Root/screens/Depression';
import AnxietyScreen from '~Root/screens/Anxiety';
import DepressionBeingScreen from '~Root/screens/DepressionBeing';
import PatientDetailScreen from '~Root/screens/Patient/Detail';

import CalendarRoute from '~Root/routes/calendar';
import TherapistProfileScreen from '~Root/screens/TherapistProfile';
import ContentRoute from '~Root/routes/content';
import AppreciatedContentScreen from '~Root/screens/Home/AppreciatedContent';
import AppreciatedTools from '~Root/screens/Home/AppreciatedTools';
import { AnxietyAssessment } from '~Root/screens/AnxietyAssessment';
import BeingWellScreen from '~Root/screens/BeingWell';
import BeingWellDetailScreen from '~Root/screens/BeingWell/Detail';
import BookTherapistRoute from '~Root/routes/book-therapist';

const MainStack = createNativeStackNavigator<MainNavigatorParamsList>();

type MainNavigatorProps = BottomTabScreenProps<
  BottomTabParamsList,
  AppRoute.MAIN_NAVIGATOR
>;

const MainRoute = (props: MainNavigatorProps) => {
  const { auth } = useAuth();

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      {...props}>
      <MainStack.Screen name={AppRoute.HOME} component={HomeScreen} />
      <MainStack.Screen
        name={AppRoute.THERAPIST_DETAIL}
        component={TherapistProfileScreen}
      />
      <MainStack.Screen
        name={AppRoute.DAILY_QUOTES}
        component={HomeDailyQuotesScreen}
      />
      <MainStack.Screen
        name={AppRoute.APPRECIATED_CONTENT}
        component={AppreciatedContentScreen}
      />
      <MainStack.Screen
        name={AppRoute.ANXIETY_ASSESSMENT}
        component={AnxietyAssessment}
      />
      <MainStack.Screen
        name={AppRoute.APPRECIATED_TOOLS}
        component={AppreciatedTools}
      />
      <MainStack.Screen
        name={AppRoute.BEING_WELL}
        component={BeingWellScreen}
      />
      <MainStack.Screen
        name={AppRoute.BEING_WELL_DETAIL}
        component={BeingWellDetailScreen}
      />
      <MainStack.Screen
        name={AppRoute.DEPRESSION_BEING}
        component={DepressionBeingScreen}
      />
      <MainStack.Screen name={AppRoute.ANXIETY} component={AnxietyScreen} />
      <MainStack.Screen
        name={AppRoute.DEPRESSION}
        component={DepressionScreen}
      />
      {auth.roleId === RoleId.THERAPIST ? (
        <>
          <MainStack.Screen
            name={AppRoute.PATIENT_DETAIL}
            component={PatientDetailScreen}
          />
          <MainStack.Screen
            name={AppRoute.CONTENT_NAVIGATOR}
            component={ContentRoute}
          />
        </>
      ) : (
        <>
          <MainStack.Screen
            name={AppRoute.CALENDAR_NAVIGATOR}
            component={CalendarRoute}
          />
          <MainStack.Screen
            name={AppRoute.BOOK_THERAPIST_NAVIGATOR}
            component={BookTherapistRoute}
          />
        </>
      )}
    </MainStack.Navigator>
  );
};

export default MainRoute;
