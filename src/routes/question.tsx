import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AppRoute } from '~Root/navigation/AppRoute';
import { QuestionNavigatorParamsList } from '~Root/navigation/config';
import Step1Screen from '~Root/screens/Auth/Quiz/Step1';
import Step2Screen from '~Root/screens/Auth/Quiz/Step2';
import Step3Screen from '~Root/screens/Auth/Quiz/Step3';
import Step4Screen from '~Root/screens/Auth/Quiz/Step4';
import QuizSuccessScreen from '~Root/screens/Auth/Quiz/Success';
import { FormQuiz } from '~Root/services/quiz/form';

const QuestionStack = createNativeStackNavigator<QuestionNavigatorParamsList>();

const QuestionRoute = () => {
  return (
    <FormQuiz>
      <QuestionStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <QuestionStack.Screen
          name={AppRoute.QUIZ_STEP1}
          component={Step1Screen}
        />
        <QuestionStack.Screen
          name={AppRoute.QUIZ_STEP2}
          component={Step2Screen}
        />
        <QuestionStack.Screen
          name={AppRoute.QUIZ_STEP3}
          component={Step3Screen}
        />
        <QuestionStack.Screen
          name={AppRoute.QUIZ_STEP4}
          component={Step4Screen}
        />
        <QuestionStack.Screen
          name={AppRoute.QUIZ_SUCCESS}
          component={QuizSuccessScreen}
        />
      </QuestionStack.Navigator>
    </FormQuiz>
  );
};

export default QuestionRoute;
