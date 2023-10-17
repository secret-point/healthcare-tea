import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { Image, Link, Paragraph } from '~Root/components';
import { IMAGES } from '~Root/config';

import { GlobalStyles } from '~Root/config/styles';
import { AppRoute } from '~Root/navigation/AppRoute';
import { AuthNavigatorParamsList } from '~Root/navigation/config';
import { PrimaryButton } from '~Root/components/Button';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';

type Props = NativeStackScreenProps<AuthNavigatorParamsList, AppRoute.INIT>;
const InitScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
  const onLogin = () => {
    navigation.navigate(AppRoute.LOGIN);
  };

  const onRegister = () => {
    navigation.navigate(AppRoute.SELECT_ROLE);
  };

  const goToTerm = () => {
    navigation.navigate(AppRoute.AUTH_STATIC, {
      title: 'term_&_conditions',
      queryKey: 'terms',
    });
  };

  const goToPrivacy = () => {
    navigation.navigate(AppRoute.AUTH_STATIC, {
      title: 'privacy_&_data_collection',
      queryKey: 'privacy',
    });
  };

  return (
    <SafeAreaLayout edges={['bottom']}>
      <View
        style={[
          GlobalStyles.ph15,
          GlobalStyles.container,
          GlobalStyles.justifyCenter,
        ]}>
        <View
          style={[
            GlobalStyles.itemsCenter,
            GlobalStyles.mb70,
            GlobalStyles.container,
            GlobalStyles.justifyEnd,
          ]}>
          <Image
            source={IMAGES.logo}
            resizeMode="cover"
            style={GlobalStyles.icon220x98}
          />
        </View>
        <View style={GlobalStyles.container}>
          <Paragraph
            p
            interRegular
            textWhite
            textCenter
            title={t('guide')}
            style={GlobalStyles.mb70}
          />
        </View>
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.itemsCenter,
            GlobalStyles.justifyBetween,
            GlobalStyles.mb30,
          ]}>
          <Link
            p
            interRegular
            textWhite
            title={t('terms_of_use')}
            onPress={goToTerm}
          />
          <Link
            p
            interRegular
            textWhite
            title={t('privacy_policy')}
            onPress={goToPrivacy}
          />
        </View>
        <Link
          textWhite
          medium
          p
          textCenter
          title={t('create_new_account')}
          style={GlobalStyles.mb30}
          onPress={onRegister}
        />
        <PrimaryButton title={t('have_an_account')} onPress={onLogin} />
      </View>
    </SafeAreaLayout>
  );
};

export default InitScreen;
