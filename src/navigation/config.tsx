import { AppRoute } from './AppRoute';

export type RootNavigatorParamsList = {
  [AppRoute.SPLASH]: undefined;
  [AppRoute.MAIN]: undefined;
  [AppRoute.TABS]: undefined;
  [AppRoute.AUTH_NAVIGATOR]: undefined;
  [AppRoute.QUIZ_QUESTION]: undefined;
  [AppRoute.THERAPIST_REGISTER_SUCCESS]: undefined;
  [AppRoute.QUESTION_YOURSELF]: undefined;
  [AppRoute.PAYMENT_SUCCESS]: undefined;
};

export type AuthNavigatorParamsList = {
  [AppRoute.INIT]: undefined;
  [AppRoute.AUTH_STATIC]: { title: string; queryKey: string };
  [AppRoute.LOGIN]: undefined;
  [AppRoute.FORGOT_PASSWORD]: undefined;
  [AppRoute.SELECT_ROLE]: undefined;
  [AppRoute.REGISTER]: { role: string };
  [AppRoute.VERIFICATION]: undefined;
  [AppRoute.VERIFICATION_RECOVERY]: { email: string };
  [AppRoute.VERIFICATION_SUCCESS]: undefined;
};

export type QuestionNavigatorParamsList = {
  [AppRoute.QUIZ_STEP1]: undefined;
  [AppRoute.QUIZ_STEP2]: undefined;
  [AppRoute.QUIZ_STEP3]: undefined;
  [AppRoute.QUIZ_STEP4]: undefined;
  [AppRoute.QUIZ_SUCCESS]: undefined;
};

export type QuestionYourselfNavigatorParamsList = {
  [AppRoute.QUESTION_YOURSELF_STEP1]: undefined;
  [AppRoute.QUESTION_YOURSELF_STEP2]: undefined;
  [AppRoute.QUESTION_YOURSELF_STEP3]: undefined;
  [AppRoute.QUESTION_YOURSELF_STEP4]: undefined;
  [AppRoute.QUESTION_YOURSELF_STEP5]: undefined;
  [AppRoute.QUESTION_YOURSELF_STEP6]: undefined;
  [AppRoute.QUESTION_YOURSELF_SUCCESS]: undefined;
};

export type BottomTabParamsList = {
  [AppRoute.MAIN_NAVIGATOR]: undefined;
  [AppRoute.PROFILE_NAVIGATOR]: undefined;
  [AppRoute.CALENDAR_NAVIGATOR]: undefined;
  [AppRoute.MESSAGE]: undefined;
  [AppRoute.COMMUNITY]: undefined;
  [AppRoute.LEARNING_NAVIGATOR]: undefined;
  [AppRoute.PAYMENT]: undefined;
  [AppRoute.SHOP_NAVIGATOR]: undefined;
};

export type MainNavigatorParamsList = {
  [AppRoute.HOME]: undefined;
  [AppRoute.ABOUT]: undefined;
  [AppRoute.DAILY_QUOTES]: undefined;
  [AppRoute.BEING_WELL]: undefined;
  [AppRoute.BEING_WELL_DETAIL]: { name: string; id: string };
  [AppRoute.APPRECIATED_CONTENT]: undefined;
  [AppRoute.APPRECIATED_TOOLS]: undefined;
  [AppRoute.DEPRESSION]: undefined;
  [AppRoute.PATIENT_DETAIL]: undefined;
  [AppRoute.CONTENT_NAVIGATOR]: undefined;
  [AppRoute.ANXIETY]: undefined;
  [AppRoute.DEPRESSION_BEING]: undefined;
  [AppRoute.MAIN]: undefined;
  [AppRoute.CALENDAR_NAVIGATOR]: undefined;
  [AppRoute.BOOK_THERAPIST_NAVIGATOR]: undefined;
  [AppRoute.THERAPIST_DETAIL]: undefined;
  [AppRoute.ANXIETY_ASSESSMENT]: {
    step: number;
    nextScreen?: string | undefined;
  };
};

export type LearningNavigatorParamsList = {
  [AppRoute.LEARNING_NAVIGATOR]: undefined;
  [AppRoute.LEARNING]: undefined;
  [AppRoute.GOALS]: undefined;
  [AppRoute.EXPLORATION]: undefined;
  [AppRoute.EXERCISE]: undefined;
  [AppRoute.EXERCISE_DETAIL]: { articleId: number };
  [AppRoute.MY_SAFE_SPACE]: undefined;
  [AppRoute.MY_JOURNAL]: undefined;
  [AppRoute.MY_JOURNAL_CREATE]: undefined;
  [AppRoute.MY_JOURNAL_DETAIL]: undefined;
  [AppRoute.MEAL_TRACKING]: undefined;
  [AppRoute.SLEEP_TRACKING]: undefined;
  [AppRoute.HABIT_TRACKING]: undefined;
  [AppRoute.MY_JOURNEY_HISTORY]: undefined;
  [AppRoute.MY_JOURNEY_HISTORY_DETAIL]: undefined;
  [AppRoute.MOOD_TRACKER]: undefined;
};

export type BookTherapistParamsList = {
  [AppRoute.BOOK_THERAPIST]: undefined;
  [AppRoute.BOOK_THERAPIST_BOOKING]: undefined;
  [AppRoute.BOOK_THERAPIST_PAYMENT]: undefined;
  [AppRoute.BOOK_THERAPIST_LIST]: undefined;
  [AppRoute.THERAPIST_DETAIL]: undefined;
};

export type CalendarNavigatorParamsList = {
  [AppRoute.CALENDAR]: undefined;
  [AppRoute.CALENDAR_APPOINTMENT]: undefined;
  [AppRoute.CALENDAR_EVENT]: undefined;
  [AppRoute.THERAPIST_DETAIL]: undefined;
};

export type ShopNavigatorParamsList = {
  [AppRoute.HOME]: undefined;
  [AppRoute.SHOP_NAVIGATOR]: undefined;
  [AppRoute.SHOP]: undefined;
};
export type ContentNavigatorParamsList = {
  [AppRoute.CONTENT]: undefined;
  [AppRoute.CONTENT_DETAIL]: { articleId: number };
  [AppRoute.CONTENT_CREATE]: undefined;
};

export type ProfileNavigatorParamsList = {
  [AppRoute.PROFILE]: undefined;
  [AppRoute.PROFILE_INFO]: undefined;
  [AppRoute.PROFILE_SETTINGS]: undefined;
  [AppRoute.PROFILE_THEME]: undefined;
  [AppRoute.PROFILE_ABOUT]: undefined;
  [AppRoute.PROFILE_ABOUT_CONTENT]: { name: string; queryKey: string };
};
