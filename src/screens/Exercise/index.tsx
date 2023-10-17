import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { GlobalStyles } from '~Root/config/styles';
import { Header, SearchInput } from '~Root/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppRoute } from '~Root/navigation/AppRoute';
import { LearningNavigatorParamsList } from '~Root/navigation/config';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import FilterButton from '~Root/components/Layout/Filter/Button';
import ExerciseListSection from '~Root/screens/Exercise/partial/ListSection';
import { IArticle } from '~Root/services/article/types';

type Props = NativeStackScreenProps<
  LearningNavigatorParamsList,
  AppRoute.EXERCISE
>;

const ExerciseScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();

  const [txtSearch, setTxtSearch] = useState('');

  const onBack = () => {
    navigation.goBack();
  };

  const onPressItem = (article: IArticle) => {
    navigation.navigate(AppRoute.EXERCISE_DETAIL, { articleId: article.id });
  };

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={onBack}
        isBack={true}
        title={t('exercise_room')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={GlobalStyles.ph15}>
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.itemsCenter,
            GlobalStyles.container,
            GlobalStyles.mb20,
          ]}>
          <SearchInput
            textSearch={txtSearch}
            setTextSearch={setTxtSearch}
            styleContainer={[GlobalStyles.container, GlobalStyles.mr10]}
          />
          <FilterButton />
        </View>
        <ExerciseListSection
          title={t('daily_meditation')}
          containerStyle={GlobalStyles.mb20}
          onPressItem={onPressItem}
        />
        <ExerciseListSection
          title={t('healthy_habits')}
          containerStyle={GlobalStyles.mb20}
          onPressItem={onPressItem}
        />
        <ExerciseListSection
          title={t('self_evaluation')}
          containerStyle={GlobalStyles.mb20}
          onPressItem={onPressItem}
        />
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default ExerciseScreen;
