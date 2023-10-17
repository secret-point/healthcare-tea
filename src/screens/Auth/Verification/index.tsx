import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';

import { GlobalStyles } from '~Root/config';
import { AuthHeader, Link, Otp, Paragraph } from '~Root/components';
import { useTranslation } from 'react-i18next';
import { replacePhoneToAsterisk } from '~Root/utils';
import { AppRoute } from '~Root/navigation/AppRoute';
import { PrimaryButton } from '~Root/components/Button';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { goBack, navigate } from '~Root/navigation';

const Verification = () => {
  const { t } = useTranslation();

  const [otpCode, setOTPCode] = useState('');
  const [_, setIsPinReady] = useState(false);
  const maximumCodeLength = 6;

  const onVerify = () => {
    navigate(AppRoute.VERIFICATION_SUCCESS);
  };

  return (
    <Pressable style={GlobalStyles.container} onPress={Keyboard.dismiss}>
      <SafeAreaLayout edges={['bottom']}>
        <AuthHeader
          showLeft={true}
          style={GlobalStyles.mb50}
          onPressLeft={goBack}
        />

        <KeyboardAvoidingView style={[GlobalStyles.container]}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <View style={[GlobalStyles.flexCol, GlobalStyles.ph15]}>
              <Paragraph
                medium
                h4
                textCenter
                textWhite
                title={t('verification_code')}
                style={GlobalStyles.mb20}
              />
              <View
                style={[
                  GlobalStyles.flexCol,
                  GlobalStyles.itemsCenter,
                  GlobalStyles.mb30,
                ]}>
                <Paragraph
                  regular
                  h5
                  textCenter
                  textWhite
                  title={t('type_verification_code')}
                />
                <Paragraph
                  regular
                  h5
                  textCenter
                  textWhite
                  title={replacePhoneToAsterisk('+341343543543')}
                />
              </View>
              <View style={GlobalStyles.mb30}>
                <Otp
                  code={otpCode}
                  setCode={setOTPCode}
                  maximumLength={maximumCodeLength}
                  setIsPinReady={setIsPinReady}
                />
              </View>
              <PrimaryButton
                title={t('verify')}
                onPress={onVerify}
                containerStyle={GlobalStyles.mb30}
              />
              <Link textCenter textWhite h4 medium title={t('resend_code')} />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaLayout>
    </Pressable>
  );
};

export default Verification;
