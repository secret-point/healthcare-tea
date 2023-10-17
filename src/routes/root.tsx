import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch } from 'react-redux';

import { AppRoute } from '~Root/navigation/AppRoute';
import { useAppSelector } from '~Root/config';
import { selectAuthState, authActions } from '~Root/services/auth/slice';
import { RootNavigatorParamsList } from '~Root/navigation/config';
import SplashScreen from '~Root/screens/Splash';
import TabRoute from '~Root/routes/tab';
import AuthRoute from '~Root/routes/auth';
import PaymentSuccessScreen from '~Root/screens/PaymentSuccess';
import QuestionRoute from '~Root/routes/question';
import QuestionYourSelfRoute from '~Root/routes/question-yourself';
import { AnxietyAssessment } from '~Root/screens/AnxietyAssessment';
import QuizSuccessScreen from '~Root/screens/Auth/Quiz/Success';
import TherapistSuccessScreen from '~Root/screens/Profile/TherapistSuccess';
const RootStack = createNativeStackNavigator<RootNavigatorParamsList>();

const RootRoute = () => {
  const dispatch = useDispatch();
  const authState = useAppSelector(selectAuthState);

  useEffect(() => {
    dispatch(authActions.initAuth());
  }, [dispatch]);

  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!authState.isAppReady || authState.loading ? (
        <RootStack.Screen name={AppRoute.SPLASH} component={SplashScreen} />
      ) : authState.auth ? (
        <RootStack.Screen name={AppRoute.TABS} component={TabRoute} />
      ) : (
        <RootStack.Screen
          name={AppRoute.AUTH_NAVIGATOR}
          component={AuthRoute}
        />
      )}

      <RootStack.Screen
        name={AppRoute.QUIZ_QUESTION}
        component={QuestionRoute}
      />
      <RootStack.Screen
        name={AppRoute.THERAPIST_REGISTER_SUCCESS}
        component={TherapistSuccessScreen}
      />
      <RootStack.Screen
        name={AppRoute.PAYMENT_SUCCESS}
        component={PaymentSuccessScreen}
      />
      <RootStack.Screen
        name={AppRoute.QUESTION_YOURSELF}
        component={QuestionYourSelfRoute}
      />
    </RootStack.Navigator>
  );
};

export default RootRoute;
