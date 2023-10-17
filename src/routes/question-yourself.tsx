import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppRoute } from '~Root/navigation/AppRoute';
import { QuestionYourselfNavigatorParamsList } from '~Root/navigation/config';
import QuestionYourSelfStep1Screen from '~Root/screens/Auth/QuestionYourSelf/Step1';
import QuestionYourSelfStep2Screen from '~Root/screens/Auth/QuestionYourSelf/Step2';
import QuestionYourSelfStep3Screen from '~Root/screens/Auth/QuestionYourSelf/Step3';
import QuestionYourSelfStep4Screen from '~Root/screens/Auth/QuestionYourSelf/Step4';
import QuestionYourSelfStep5Screen from '~Root/screens/Auth/QuestionYourSelf/Step5';
import QuestionYourSelfStep6Screen from '~Root/screens/Auth/QuestionYourSelf/Step6';
import QuestionYourSelfSuccessScreen from '~Root/screens/Auth/QuestionYourSelf/Success';

const QuestionYourSelfStack =
  createNativeStackNavigator<QuestionYourselfNavigatorParamsList>();

const QuestionYourSelfRoute = () => {
  return (
    <QuestionYourSelfStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <QuestionYourSelfStack.Screen
        name={AppRoute.QUESTION_YOURSELF_STEP1}
        component={QuestionYourSelfStep1Screen}
      />
      <QuestionYourSelfStack.Screen
        name={AppRoute.QUESTION_YOURSELF_STEP2}
        component={QuestionYourSelfStep2Screen}
      />
      <QuestionYourSelfStack.Screen
        name={AppRoute.QUESTION_YOURSELF_STEP3}
        component={QuestionYourSelfStep3Screen}
      />
      <QuestionYourSelfStack.Screen
        name={AppRoute.QUESTION_YOURSELF_STEP4}
        component={QuestionYourSelfStep4Screen}
      />
      <QuestionYourSelfStack.Screen
        name={AppRoute.QUESTION_YOURSELF_STEP5}
        component={QuestionYourSelfStep5Screen}
      />
      <QuestionYourSelfStack.Screen
        name={AppRoute.QUESTION_YOURSELF_STEP6}
        component={QuestionYourSelfStep6Screen}
      />
      <QuestionYourSelfStack.Screen
        name={AppRoute.QUESTION_YOURSELF_SUCCESS}
        component={QuestionYourSelfSuccessScreen}
      />
    </QuestionYourSelfStack.Navigator>
  );
};

export default QuestionYourSelfRoute;
