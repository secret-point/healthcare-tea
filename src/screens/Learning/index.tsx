import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { GlobalStyles } from '~Root/config/styles';
import {
  CardImageLearning,
  MainHeader,
  Paragraph,
  TitleToolBox,
  SectionHeading,
  CirclePercent,
} from '~Root/components';
import { MOCK_FEELING, MOCK_LEARNING } from '~Root/utils';
import { AppRoute } from '~Root/navigation/AppRoute';
import { LearningNavigatorParamsList } from '~Root/navigation/config';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';

type Props = NativeStackScreenProps<
  LearningNavigatorParamsList,
  AppRoute.LEARNING
>;

const LearningScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();

  const onGoals = () => {
    navigation.navigate(AppRoute.GOALS);
  };

  const onExploration = () => {
    navigation.navigate(AppRoute.EXPLORATION);
  };

  const onExercise = () => {
    navigation.navigate(AppRoute.EXERCISE);
  };

  const onMySafeSpace = () => {
    navigation.navigate(AppRoute.MY_SAFE_SPACE);
  };

  const onJournal = () => {
    navigation.navigate(AppRoute.MY_JOURNAL);
  };

  const onMealTracking = () => {
    navigation.navigate(AppRoute.MEAL_TRACKING);
  };

  const onSleepTracking = () => {
    navigation.navigate(AppRoute.SLEEP_TRACKING);
  };

  const onHabitTracking = () => {
    navigation.navigate(AppRoute.HABIT_TRACKING);
  };

  const onJourneyHistory = () => {
    navigation.navigate(AppRoute.MY_JOURNEY_HISTORY);
  };

  const onMoodTracker = () => {
    navigation.navigate(AppRoute.MOOD_TRACKER);
  };

  return (
    <SafeAreaLayout>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={GlobalStyles.ph15}>
          <MainHeader />
          <Paragraph
            textCenter
            textWhite
            bold
            h2
            title={t('my_learning_space')}
            style={GlobalStyles.mb20}
          />
          <SectionHeading
            title={t('goals')}
            linkText={t('see_all')}
            onPressTitle={onGoals}
            onPressLink={onGoals}
          />
          <TitleToolBox containerStyle={GlobalStyles.mb20} title="Meditate" />

          <SectionHeading
            subTitle={t('are_you_feeling')}
            linkText={t('see_all')}
            onPressTitle={onMoodTracker}
            onPressLink={onMoodTracker}
          />
          <View style={GlobalStyles.mb20}>
            <FlatList
              horizontal
              data={MOCK_FEELING}
              renderItem={({ item }) => (
                <CirclePercent number={item.number} label={item.title} />
              )}
              contentContainerStyle={GlobalStyles.columnGap5}
              keyExtractor={(item, index) => `${index.toString()}`}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={[GlobalStyles.flexRow, GlobalStyles.mb20]}>
            <CardImageLearning
              {...MOCK_LEARNING[0]}
              styleContainer={GlobalStyles.mr10}
              onPress={onExercise}
            />
            <View style={GlobalStyles.flexCol}>
              <CardImageLearning
                {...MOCK_LEARNING[1]}
                size="small"
                styleContainer={GlobalStyles.mb10}
                onPress={onExploration}
              />
              <CardImageLearning
                {...MOCK_LEARNING[2]}
                size="small"
                onPress={onMySafeSpace}
              />
            </View>
          </View>
          <SectionHeading
            title={t('my_journal')}
            linkText={t('see_all')}
            onPressTitle={onJournal}
            onPressLink={onJournal}
          />
          <TitleToolBox containerStyle={GlobalStyles.mb20} title="Journal" />

          <SectionHeading
            title={t('sleep_tracking')}
            linkText={t('see_all')}
            onPressTitle={onSleepTracking}
            onPressLink={onSleepTracking}
          />
          <TitleToolBox
            containerStyle={GlobalStyles.mb20}
            title="Sleep Tracking"
          />

          <SectionHeading
            title={t('meal_tracking')}
            linkText={t('see_all')}
            onPressTitle={onMealTracking}
            onPressLink={onMealTracking}
          />
          <TitleToolBox
            containerStyle={GlobalStyles.mb20}
            title="Meal Tracking"
          />

          <SectionHeading
            title={t('habit_tracking')}
            linkText={t('see_all')}
            onPressTitle={onHabitTracking}
            onPressLink={onHabitTracking}
          />
          <TitleToolBox
            containerStyle={GlobalStyles.mb20}
            title="Habit Tracking"
          />

          <SectionHeading
            title={t('journey_history')}
            linkText={t('see_all')}
            onPressTitle={onJourneyHistory}
            onPressLink={onJourneyHistory}
          />
          <TitleToolBox
            containerStyle={GlobalStyles.mb20}
            title="Tool progress"
          />
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default LearningScreen;
