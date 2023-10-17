import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { ColorVariant, Image, Link, Paragraph } from '~Root/components';
import { IMAGES } from '~Root/config';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { GlobalStyles } from '~Root/config/styles';
import { AppRoute } from '~Root/navigation/AppRoute';
import styles from './styles';
import { PrimaryButton } from '~Root/components/Button';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { navigate } from '~Root/navigation';
import { RootNavigatorParamsList } from '~Root/navigation/config';

type Props = NativeStackScreenProps<
  RootNavigatorParamsList,
  AppRoute.THERAPIST_REGISTER_SUCCESS
>;
const TherapistSuccessScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();

  const onGetStarted = () => {
    navigate(AppRoute.PROFILE_NAVIGATOR, {
      screen: AppRoute.PROFILE_INFO,
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
            GlobalStyles.container,
            GlobalStyles.justifyCenter,
          ]}>
          <Image
            source={IMAGES.logoWhite}
            resizeMode="cover"
            style={GlobalStyles.icon110x180}
          />
        </View>
        <View style={[GlobalStyles.container, GlobalStyles.itemsStart]}>
          <Paragraph
            h3
            bold
            textWhite
            textLeft
            title={t('setup_your_professional')}
            style={GlobalStyles.mb30}
          />
          <Paragraph
            p
            medium
            colorVariant={ColorVariant.EXTRA2}
            textLeft
            title={t('thank_you_creating_account_therapist')}
            style={GlobalStyles.lineHeight18}
          />
        </View>
        <View
          style={[
            GlobalStyles.container,
            GlobalStyles.flexCol,
            GlobalStyles.justifyEnd,
            GlobalStyles.pb40,
          ]}>
          <Paragraph
            p
            medium
            colorVariant={ColorVariant.EXTRA2}
            textLeft
            title={t('in_the_meantime_pealse_continue_setup_therapist')}
            style={[GlobalStyles.lineHeight18, GlobalStyles.pb15]}
          />
          <PrimaryButton
            title={t('continue_to_professional')}
            onPress={onGetStarted}
          />
        </View>
      </View>
    </SafeAreaLayout>
  );
};

export default TherapistSuccessScreen;
