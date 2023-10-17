import React from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthNavigatorParamsList } from '~Root/navigation/config';
import { AppRoute } from '~Root/navigation/AppRoute';
import { AuthHeader, FieldInputControl } from '~Root/components';
import { GlobalStyles } from '~Root/config';
import { IActionForgotPasswordRequested } from '~Root/services/auth/types';
import { PrimaryButton } from '~Root/components/Button';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { AuthApi } from '~Root/services/auth/apis';
import { ErrorResponse } from '~Root/utils';

const schema = yup.object().shape({
  email: yup.string().required().email(),
});

type Props = NativeStackScreenProps<
  AuthNavigatorParamsList,
  AppRoute.FORGOT_PASSWORD
>;

const ForgotPasswordScreen = ({ navigation }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<IActionForgotPasswordRequested>({
    shouldUnregister: true,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const { t } = useTranslation();

  const onSubmit: SubmitHandler<IActionForgotPasswordRequested> = async (
    payload: IActionForgotPasswordRequested,
  ) => {
    try {
      const result = await AuthApi.passwordRecovery(payload);

      if (result) {
        navigation.navigate(AppRoute.VERIFICATION_RECOVERY, {
          email: payload?.email || '',
        });
      }
    } catch (e) {
      // for test
      navigation.navigate(AppRoute.VERIFICATION_RECOVERY, {
        email: payload?.email || '',
      });
      if (!(e instanceof ErrorResponse)) {
        return;
      }
    }
  };

  return (
    <SafeAreaLayout>
      <AuthHeader
        showLeft={true}
        style={GlobalStyles.mb50}
        onPressLeft={navigation.goBack}
      />

      <KeyboardAvoidingView>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={[GlobalStyles.flexCol, GlobalStyles.ph15]}>
            <View style={[GlobalStyles.flexCol, GlobalStyles.mb30]}>
              <View style={GlobalStyles.mb15}>
                <FieldInputControl
                  label={t('email')}
                  control={control}
                  name="email"
                  autoFocus={true}
                  onSubmitEditing={handleSubmit(onSubmit)}
                  keyboardType="email-address"
                />
              </View>
              <View style={[GlobalStyles.pb25]}>
                <PrimaryButton
                  title={t('next')}
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

export default ForgotPasswordScreen;
