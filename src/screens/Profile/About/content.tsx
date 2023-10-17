import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { Header, Loading } from '~Root/components';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { GlobalStyles } from '~Root/config';
import { IStaticPagesResponse } from '~Root/services/aboutContent/types';
import { goBack } from '~Root/navigation';
import { ProfileNavigatorParamsList } from '~Root/navigation/config';
import { AppRoute } from '~Root/navigation/AppRoute';
import HtmlView from '~Root/components/HtmlView';

type Props = NativeStackScreenProps<
  ProfileNavigatorParamsList,
  AppRoute.PROFILE_ABOUT_CONTENT
>;

const ProfileAboutContentScreen = ({ route }: Props) => {
  const { t } = useTranslation();
  const { name, queryKey } = route.params;

  const { data, isSuccess, isLoading } = useQuery<IStaticPagesResponse>({
    queryKey: ['/static-pages', queryKey],
  });

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={goBack}
        isBack={true}
        title={t(name) ?? ''}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[GlobalStyles.ph15, GlobalStyles.container]}
        style={GlobalStyles.mb20}>
        {isLoading ? (
          <Loading />
        ) : (
          isSuccess && <HtmlView html={data.content} />
        )}
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default ProfileAboutContentScreen;
