import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { AppRoute } from '~Root/navigation/AppRoute';
import {
  BottomTabParamsList,
  LearningNavigatorParamsList,
} from '~Root/navigation/config';
import LearningScreen from '~Root/screens/Learning';
import GoalsScreen from '~Root/screens/Goals';
import ExplorationScreen from '~Root/screens/Exploration';
import ExerciseScreen from '~Root/screens/Exercise';
import MySafeSpaceScreen from '~Root/screens/MySafeSpace';
import MyJournalScreen from '~Root/screens/MyJournal';
import MyJournalDetailScreen from '~Root/screens/MyJournal/Detail';
import MealTrackingScreen from '~Root/screens/MealTracking';
import SleepTrackingScreen from '~Root/screens/SleepTracking';
import HabitTrackingScreen from '~Root/screens/HabitTracking';
import MyJournalHistoryScreen from '~Root/screens/MyJournal/History';
import MyJourneyHistoryDetailScreen from '~Root/screens/MyJournal/HistoryDetail';
import MoodTrackerScreen from '~Root/screens/MoodTracker';
import ExerciseDetailScreen from '~Root/screens/Exercise/Detail';
import { MyJournalCreateScreen } from '~Root/screens/MyJournal/Create';
const LearningStack = createNativeStackNavigator<LearningNavigatorParamsList>();

type LearningNavigatorProps = BottomTabScreenProps<
  BottomTabParamsList,
  AppRoute.LEARNING_NAVIGATOR
>;

const LearningRoute = (props: LearningNavigatorProps) => {
  return (
    <LearningStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      {...props}>
      <LearningStack.Screen
        name={AppRoute.LEARNING}
        component={LearningScreen}
      />
      <LearningStack.Screen name={AppRoute.GOALS} component={GoalsScreen} />
      <LearningStack.Screen
        name={AppRoute.EXPLORATION}
        component={ExplorationScreen}
      />
      <LearningStack.Screen
        name={AppRoute.EXERCISE}
        component={ExerciseScreen}
      />
      <LearningStack.Screen
        name={AppRoute.EXERCISE_DETAIL}
        component={ExerciseDetailScreen}
      />
      <LearningStack.Screen
        name={AppRoute.MY_SAFE_SPACE}
        component={MySafeSpaceScreen}
      />
      <LearningStack.Screen
        name={AppRoute.MY_JOURNAL}
        component={MyJournalScreen}
      />
      <LearningStack.Screen
        name={AppRoute.MY_JOURNAL_CREATE}
        component={MyJournalCreateScreen}
      />
      <LearningStack.Screen
        name={AppRoute.MY_JOURNAL_DETAIL}
        component={MyJournalDetailScreen}
      />
      <LearningStack.Screen
        name={AppRoute.MY_JOURNEY_HISTORY}
        component={MyJournalHistoryScreen}
      />
      <LearningStack.Screen
        name={AppRoute.MY_JOURNEY_HISTORY_DETAIL}
        component={MyJourneyHistoryDetailScreen}
      />
      <LearningStack.Screen
        name={AppRoute.MEAL_TRACKING}
        component={MealTrackingScreen}
      />
      <LearningStack.Screen
        name={AppRoute.SLEEP_TRACKING}
        component={SleepTrackingScreen}
      />
      <LearningStack.Screen
        name={AppRoute.HABIT_TRACKING}
        component={HabitTrackingScreen}
      />
      <LearningStack.Screen
        name={AppRoute.MOOD_TRACKER}
        component={MoodTrackerScreen}
      />
    </LearningStack.Navigator>
  );
};

export default LearningRoute;
