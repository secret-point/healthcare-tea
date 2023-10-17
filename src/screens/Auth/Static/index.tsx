import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { AuthHeader, Loading } from '~Root/components';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { GlobalStyles } from '~Root/config';
import { IStaticPagesResponse } from '~Root/services/aboutContent/types';
import { goBack } from '~Root/navigation';
import { AuthNavigatorParamsList } from '~Root/navigation/config';
import { AppRoute } from '~Root/navigation/AppRoute';
import HtmlView from '~Root/components/HtmlView';

type Props = NativeStackScreenProps<
  AuthNavigatorParamsList,
  AppRoute.AUTH_STATIC
>;

const AuthStaticScreen = ({ route }: Props) => {
  const { t } = useTranslation();
  const { title, queryKey } = route.params;

  const { data, isSuccess, isLoading } = useQuery<IStaticPagesResponse>({
    queryKey: ['/static-pages', queryKey],
    onError: _ => {
      goBack();
    },
  });

  return (
    <SafeAreaLayout edges={['bottom']}>
      <AuthHeader
        showLeft={true}
        isLogo={false}
        style={GlobalStyles.mb20}
        onPressLeft={goBack}
        logoTitle={t(title)}
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

export default AuthStaticScreen;
