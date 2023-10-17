import React from 'react';
import {
  CirclePercent,
  ColorVariant,
  Loading,
  Paragraph,
  PrimaryToolBox,
  SectionHeading,
} from '~Root/components';
import { GlobalStyles } from '~Root/config';
import { FlatList, View } from 'react-native';
import { MOCK_FEELING } from '~Root/utils';
import CardImage from '../../../components/CardImage';
import { useTranslation } from 'react-i18next';
import { AppRoute } from '~Root/navigation/AppRoute';
import { navigate } from '~Root/navigation';
import { useAuth } from '~Root/services/auth/hook';
import { RoleId } from '~Root/services/auth/types';
import { useQuery } from '@tanstack/react-query';
import { IDailyQuote } from '~Root/services/daily-quotes/types';

const HomeDailyQuote = () => {
  const { auth } = useAuth();
  const { t } = useTranslation();

  const { data, isLoading, isSuccess } = useQuery<{ data: IDailyQuote }>({
    queryKey: ['/daily-quotes/today'],
  });

  const onDaily = () => {
    navigate(AppRoute.DAILY_QUOTES);
  };

  const goMoodTracker = () => {
    navigate(AppRoute.LEARNING_NAVIGATOR, {
      screen: AppRoute.MOOD_TRACKER,
      initial: false,
    });
  };

  const onBeingWell = () => {
    navigate(AppRoute.BEING_WELL);
  };

  const goToToolAndLibrary = () => {
    console.log('tool and libary');
  };

  const goToContent = () => {
    navigate(AppRoute.CONTENT_NAVIGATOR, {
      screen: AppRoute.CONTENT,
      initial: false,
    });
  };

  const goToCommunity = () => {
    console.log('community');
  };

  const goToExercise = () => {
    navigate(AppRoute.LEARNING_NAVIGATOR, {
      screen: AppRoute.EXERCISE,
      initial: false,
    });
  };

  const goToRecommendedForYou = () => {
    // @TODO: Update to recommended inside the homepage
    navigate(AppRoute.ANXIETY_ASSESSMENT, { step: 1 });
    // navigate(AppRoute.LEARNING_NAVIGATOR, {
    //   screen: AppRoute.EXPLORATION,
    //   initial: false,
    // });
  };

  const onDepression = () => {
    navigate(AppRoute.DEPRESSION);
  };

  return (
    <>
      <SectionHeading
        title={t('daily_quote')}
        linkText={t('see_all')}
        onPressTitle={onDaily}
        onPressLink={onDaily}
      />

      {isLoading ? (
        <Loading />
      ) : (
        isSuccess && (
          <PrimaryToolBox containerStyle={GlobalStyles.mb20}>
            <Paragraph
              colorVariant={ColorVariant.TEXT_FRAME}
              medium
              p
              title={`"${data.data.quote}"`}
            />
          </PrimaryToolBox>
        )
      )}

      {auth.roleId === RoleId.THERAPIST ? (
        <View
          style={[GlobalStyles.flexRow, GlobalStyles.mb20, GlobalStyles.gap10]}>
          <CardImage
            title={t('tool_library')}
            styleContainer={[GlobalStyles.container]}
            onPress={goToToolAndLibrary}
          />
          <View
            style={[
              GlobalStyles.flexCol,
              GlobalStyles.gap10,
              GlobalStyles.container,
            ]}>
            <CardImage
              size="small"
              title={t('content')}
              styleContainer={[GlobalStyles.container]}
              onPress={goToContent}
            />
            <CardImage
              size="small"
              title={t('community')}
              styleContainer={[GlobalStyles.container]}
              onPress={goToCommunity}
            />
          </View>
        </View>
      ) : (
        <>
          <SectionHeading
            subTitle={t('how_feeling')}
            linkText={t('see_all')}
            onPressTitle={goMoodTracker}
            onPressLink={goMoodTracker}
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
          <View
            style={[
              GlobalStyles.flexRow,
              GlobalStyles.mb20,
              GlobalStyles.gap10,
            ]}>
            <View
              style={[
                GlobalStyles.flexCol,
                GlobalStyles.container,
                GlobalStyles.gap10,
              ]}>
              <CardImage
                title={t('being_well')}
                subTitle={t('maintaining_well_being')}
                onPress={onBeingWell}
              />
              <CardImage
                title={t('exercise_room')}
                subTitle={t('a_deeper_dive')}
                size="small"
                onPress={goToExercise}
              />
            </View>
            <View
              style={[
                GlobalStyles.flexCol,
                GlobalStyles.gap10,
                GlobalStyles.container,
              ]}>
              <CardImage
                title={t('recommended_for_you')}
                subTitle={t('curated_content')}
                size="small"
                onPress={goToRecommendedForYou}
              />
              <CardImage
                title={t('what_would_you_like_to_work_on')}
                subTitle={t('explore_more_about_yourself')}
                onPress={onDepression}
              />
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default HomeDailyQuote;
