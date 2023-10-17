import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { ColorVariant, Image, Link, Paragraph } from '~Root/components';
import { IMAGES } from '~Root/config';

import { GlobalStyles } from '~Root/config/styles';
import { AppRoute } from '~Root/navigation/AppRoute';
import styles from './styles';
import { PrimaryButton } from '~Root/components/Button';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { navigate } from '~Root/navigation';

const QuestionYourSelfSuccessScreen = () => {
  const { t } = useTranslation();

  const onGetStarted = () => {
    navigate(AppRoute.HOME);
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
            GlobalStyles.container,
            GlobalStyles.justifyCenter,
          ]}>
          <Image
            source={IMAGES.logo}
            resizeMode="cover"
            style={GlobalStyles.icon220x98}
          />
        </View>
        <View style={[GlobalStyles.container, GlobalStyles.itemsCenter]}>
          <Paragraph
            h2
            bold
            textWhite
            textCenter
            title={t('congratulation')}
            style={GlobalStyles.mb30}
          />
          <Paragraph
            p
            medium
            colorVariant={ColorVariant.EXTRA2}
            textCenter
            title={t('thank_you_creating_account_with_change')}
            style={GlobalStyles.lineHeight22}
          />
          <Paragraph
            p
            medium
            textCenter
            textWhite
            title={t('profile_settings')}
            style={GlobalStyles.lineHeight22}
          />
        </View>
        <View
          style={[
            GlobalStyles.container,
            GlobalStyles.flexCol,
            GlobalStyles.justifyEnd,
          ]}>
          <Paragraph
            colorVariant={ColorVariant.CONTRAST}
            medium
            p
            textCenter
            title={t('are_you_ready')}
            style={[GlobalStyles.mb20]}
          />
          <PrimaryButton title={t('let_get_started')} onPress={onGetStarted} />
        </View>
      </View>
    </SafeAreaLayout>
  );
};

export default QuestionYourSelfSuccessScreen;
