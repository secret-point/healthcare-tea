import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';

import { GlobalStyles } from '~Root/config';
import { Link, Otp, Paragraph, ServerError } from '~Root/components';
import { useTranslation } from 'react-i18next';
import { ErrorResponse, replacePhoneToAsterisk } from '~Root/utils';
import { PrimaryButton } from '~Root/components/Button';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';

type Props = {
  phoneNumber: string;
  onVerify: (code: string) => Promise<void>;
  onResendCode: () => void;
};
const maximumCodeLength = 6;
const Verification = ({ phoneNumber, onVerify, onResendCode }: Props) => {
  const { t } = useTranslation();

  const [otpCode, setOTPCode] = useState('');
  const [_, setIsPinReady] = useState(false);
  const [error, setError] = useState<ErrorResponse>();

  const verifyCode = async () => {
    try {
      await onVerify(otpCode);
    } catch (err) {
      if (err instanceof ErrorResponse) {
        setOTPCode('');
        setError(err);
      }
    }
  };
  return (
    <Pressable style={GlobalStyles.container} onPress={Keyboard.dismiss}>
      <SafeAreaLayout edges={['bottom']}>
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
                  title={replacePhoneToAsterisk(phoneNumber)}
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
              <ServerError error={error} />
              <PrimaryButton
                title={t('verify')}
                onPress={verifyCode}
                containerStyle={GlobalStyles.mb30}
              />
              <Link
                textCenter
                textWhite
                h4
                medium
                title={t('resend_code')}
                onPress={onResendCode}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaLayout>
    </Pressable>
  );
};

export default Verification;
