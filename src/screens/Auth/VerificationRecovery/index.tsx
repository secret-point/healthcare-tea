import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AuthNavigatorParamsList } from '~Root/navigation/config';
import { AppRoute } from '~Root/navigation/AppRoute';
import { AuthHeader, FieldInputControl } from '~Root/components';
import { GlobalStyles, IMAGES } from '~Root/config';
import { PrimaryButton } from '~Root/components/Button';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { IActionChangePasswordRecoveryRequested } from '~Root/services/auth/types';
import { AuthApi } from '~Root/services/auth/apis';
import { ErrorResponse } from '~Root/utils';
import { showError } from '~Root/utils/toast';

const schema = yup.object().shape({
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('password')], 'Passwords must match'),
  verificationCode: yup.string().max(6).min(6).required(),
});

type Props = NativeStackScreenProps<
  AuthNavigatorParamsList,
  AppRoute.VERIFICATION_RECOVERY
>;

const VerificationRecoveryScreen = ({ route, navigation }: Props) => {
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { isValid },
  } = useForm<IActionChangePasswordRecoveryRequested>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  const { email } = route.params;
  const { t } = useTranslation();
  const [secureTextEntry, setSecureTextEntry] = useState({
    password: true,
    confirm: true,
  });

  const onSubmit = async (values: IActionChangePasswordRecoveryRequested) => {
    try {
      await AuthApi.passwordRecoverySubmit({
        ...values,
        email: email,
      });
      navigation.navigate(AppRoute.LOGIN);
    } catch (e) {
      if (!(e instanceof ErrorResponse)) {
        return;
      }
      showError({
        text1: e.message,
      });
    }
  };

  const onSubmitEditing = (key: any) => {
    setFocus(key);
  };

  const onIconClick = () => {
    setSecureTextEntry({
      ...secureTextEntry,
      password: !secureTextEntry.password,
    });
  };

  const onIconConfirmClick = () => {
    setSecureTextEntry({
      ...secureTextEntry,
      confirm: !secureTextEntry.confirm,
    });
  };

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaLayout edges={['bottom']}>
      <AuthHeader
        showLeft={true}
        style={GlobalStyles.mb20}
        onPressLeft={onBack}
      />
      <KeyboardAvoidingView style={GlobalStyles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={[GlobalStyles.flexCol, GlobalStyles.ph15]}>
            <View style={[GlobalStyles.flexCol, GlobalStyles.mb30]}>
              <FieldInputControl
                styleContainer={GlobalStyles.mb15}
                label={t('verification_code')}
                control={control}
                name="verificationCode"
                onSubmitEditing={() => onSubmitEditing('password')}
              />
              <FieldInputControl
                styleContainer={GlobalStyles.mb15}
                label={t('password')}
                secureTextEntry={secureTextEntry.password}
                control={control}
                name="password"
                icon={
                  <Image
                    source={IMAGES.iconEye16x16}
                    resizeMode="contain"
                    style={GlobalStyles.icon16x16}
                  />
                }
                onPressIcon={onIconClick}
                onSubmitEditing={() => onSubmitEditing('confirmPassword')}
              />
              <FieldInputControl
                styleContainer={GlobalStyles.mb15}
                label={t('confirm_password')}
                secureTextEntry={secureTextEntry.confirm}
                control={control}
                name="confirmPassword"
                icon={
                  <Image
                    source={IMAGES.iconEye16x16}
                    resizeMode="contain"
                    style={GlobalStyles.icon16x16}
                  />
                }
                onPressIcon={onIconConfirmClick}
              />
              <View style={[GlobalStyles.pb25]}>
                <PrimaryButton
                  title={t('verify')}
                  onPress={handleSubmit(onSubmit)}
                  disabled={!isValid}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaLayout>
  );
};

export default VerificationRecoveryScreen;
