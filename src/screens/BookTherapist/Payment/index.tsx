import React, { useState } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';

import { GlobalStyles } from '~Root/config/styles';
import {
  ColorVariant,
  Header,
  Paragraph,
  PrimaryButton,
  Radio,
} from '~Root/components';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { goBack, navigate } from '~Root/navigation';
import { useAppTheme } from '~Root/services/theme/hook';
import { PaymentMethod } from '~Root/services/bookingTherapist/types';
import createStyles from './styles';
import { IMAGES } from '~Root/config';
import { FormCardContainer, FormCardItem } from '~Root/components/Form/Card';
import { AppRoute } from '~Root/navigation/AppRoute';

const BookingTherapistPayment = () => {
  const { t } = useTranslation();
  const { globalStyles, theme } = useAppTheme(true);
  const styles = createStyles(theme);

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
    null,
  );

  const changePaymentMethod = (item: PaymentMethod) => () => {
    setPaymentMethod(item);
  };

  const onApply = () => {
    navigate(AppRoute.PAYMENT_SUCCESS);
  };

  const customIcon = (selected: boolean) => (
    <View
      style={[
        styles.checkBox,
        selected ? styles.checkBoxChecked : styles.checkBoxUncheck,
      ]}>
      {selected && (
        <Icon size={19} color={theme.contrastColor} name="checkmark-sharp" />
      )}
    </View>
  );

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={goBack}
        isBack={true}
        title={t('payment')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={GlobalStyles.ph15}>
        <View style={GlobalStyles.mb20}>
          <Radio
            selected={paymentMethod === PaymentMethod.CREDIT_CARD}
            styleContainer={[globalStyles.bgContrast, GlobalStyles.mb15]}
            onSelect={changePaymentMethod(PaymentMethod.CREDIT_CARD)}
            customIcon={customIcon}>
            <View
              style={[
                GlobalStyles.container,
                GlobalStyles.flexRow,
                GlobalStyles.justifyBetween,
                GlobalStyles.itemsCenter,
              ]}>
              <Paragraph
                medium
                h5
                title={t('credit_card')}
                colorVariant={ColorVariant.REV_CONTRAST}
              />
              <View
                style={[
                  GlobalStyles.flexRow,
                  GlobalStyles.flexGrow1,
                  GlobalStyles.justifyEnd,
                  GlobalStyles.itemsCenter,
                  GlobalStyles.gap5,
                ]}>
                <Image
                  style={styles.cardIcon}
                  source={IMAGES.cardVisa}
                  resizeMode="contain"
                />
                <Image
                  style={styles.cardIcon}
                  source={IMAGES.cardMaster}
                  resizeMode="contain"
                />
                <Image
                  style={styles.cardIcon}
                  source={IMAGES.cardAmerican}
                  resizeMode="contain"
                />
              </View>
            </View>
          </Radio>
          <Radio
            selected={paymentMethod === PaymentMethod.PAYPAL}
            styleContainer={[globalStyles.bgContrast]}
            onSelect={changePaymentMethod(PaymentMethod.PAYPAL)}
            customIcon={customIcon}>
            <View
              style={[
                GlobalStyles.container,
                GlobalStyles.flexRow,
                GlobalStyles.justifyBetween,
                GlobalStyles.itemsCenter,
              ]}>
              <Paragraph
                medium
                h5
                title={t('paypal')}
                colorVariant={ColorVariant.REV_CONTRAST}
              />
              <Image
                style={styles.cardSingleIcon}
                source={IMAGES.cardPaypal}
                resizeMode="contain"
              />
            </View>
          </Radio>
        </View>

        {paymentMethod === PaymentMethod.CREDIT_CARD ? (
          <>
            <FormCardContainer
              label={t('add_credit_debit_card')}
              containerStyle={GlobalStyles.mb15}>
              <FormCardItem label={t('card_holder_name')} />
              <FormCardItem
                label={t('card_number')}
                inputProps={{ keyboardType: 'numeric' }}
              />
            </FormCardContainer>

            <FormCardContainer label={t('expire_date')}>
              <View style={[GlobalStyles.flexRow, GlobalStyles.gap5]}>
                <FormCardItem
                  label={t('month')}
                  inputProps={{ keyboardType: 'numeric' }}
                />
                <FormCardItem
                  label={t('month')}
                  inputProps={{ keyboardType: 'numeric' }}
                />
              </View>
              <FormCardItem label={t('security_code')} />
            </FormCardContainer>
          </>
        ) : paymentMethod === PaymentMethod.PAYPAL ? (
          <FormCardContainer label={t('email')}>
            <FormCardItem label={t('email')} />
          </FormCardContainer>
        ) : null}

        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.justifyEnd,
            GlobalStyles.mt15,
          ]}>
          <PrimaryButton
            title={t('apply')}
            disabled={!paymentMethod}
            onPress={onApply}
          />
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default BookingTherapistPayment;
