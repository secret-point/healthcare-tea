import React from 'react';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

import { GlobalStyles } from '~Root/config/styles';
import { Header, Loading, Paragraph } from '~Root/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppRoute } from '~Root/navigation/AppRoute';
import { LearningNavigatorParamsList } from '~Root/navigation/config';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import HtmlView from '~Root/components/HtmlView';
import LiveVideo from '~Root/components/LiveVideo';
import { useArticleDetail } from '~Root/services/article/hook';

type Props = NativeStackScreenProps<
  LearningNavigatorParamsList,
  AppRoute.EXERCISE_DETAIL
>;

const ExerciseDetailScreen = ({ navigation, route }: Props) => {
  const { articleId } = route.params;
  const { t } = useTranslation();

  const { result, onScroll, onProgressVideo } = useArticleDetail(articleId);
  const { isSuccess, data, isLoading } = result;

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={navigation.goBack}
        isBack={true}
        title={t('recommended_for_you')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      {isLoading ? (
        <Loading />
      ) : isSuccess ? (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={GlobalStyles.ph15}
          onScroll={onScroll}
          scrollEventThrottle={160}>
          <Paragraph h2 semibold title={data.title} />

          {data.content ? (
            <HtmlView html={data.content} />
          ) : data.video ? (
            <LiveVideo
              uri={data.video}
              poster={data.image}
              onProgress={onProgressVideo}
            />
          ) : null}
        </ScrollView>
      ) : null}
    </SafeAreaLayout>
  );
};

export default ExerciseDetailScreen;
