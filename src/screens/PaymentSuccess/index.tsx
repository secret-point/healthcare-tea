import React from 'react';
import { Image, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { GlobalStyles } from '~Root/config/styles';
import {
  ColorVariant,
  FlatButton,
  Header,
  Paragraph,
  PrimaryButton,
} from '~Root/components';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { goBack, navigate } from '~Root/navigation';
import { IMAGES } from '~Root/config';
import styles from './styles';
import { AppRoute } from '~Root/navigation/AppRoute';

const PaymentSuccessScreen = () => {
  const { t } = useTranslation();

  const viewYourBooking = () => {
    navigate(AppRoute.BOOK_THERAPIST_NAVIGATOR, {
      screen: AppRoute.BOOK_THERAPIST_BOOKING,
      initial: false,
    });
  };

  const backToHomepage = () => {
    navigate(AppRoute.HOME);
  };

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={goBack}
        isBack={true}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <View style={[GlobalStyles.ph15, GlobalStyles.container]}>
        <View
          style={[
            GlobalStyles.container,
            GlobalStyles.justifyCenter,
            GlobalStyles.itemsCenter,
          ]}>
          <Image source={IMAGES.paymentSuccess} style={styles.iconStyle} />
          <Paragraph
            h2
            textCenter
            colorVariant={ColorVariant.CONTRAST}
            title={t('payment_successfully_completed')}
          />
        </View>
        <View style={GlobalStyles.mb30}>
          <PrimaryButton
            title={t('view_your_booking')}
            containerStyle={GlobalStyles.mb10}
            onPress={viewYourBooking}
          />
          <FlatButton title={t('back_to_homepage')} onPress={backToHomepage} />
        </View>
      </View>
    </SafeAreaLayout>
  );
};

export default PaymentSuccessScreen;
