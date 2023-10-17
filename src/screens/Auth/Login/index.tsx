import React, { useCallback, useState } from 'react';
import { KeyboardAvoidingView, ScrollView, View, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthNavigatorParamsList } from '~Root/navigation/config';
import { AppRoute } from '~Root/navigation/AppRoute';
import {
  AuthHeader,
  CheckBox,
  CountryCodePicker,
  FieldInputControl,
  Link,
} from '~Root/components';
import { GlobalStyles, IMAGES } from '~Root/config';
import { ColorVariant } from '~Root/components/Paragraph';
import {
  Auth2FARequested,
  IAuth,
  ILoginEmailRequested,
  ILoginPhoneRequested,
} from '~Root/services/auth/types';
import { AuthApi } from '~Root/services/auth/apis';
import { authActions } from '~Root/services/auth/slice';
import { PrimaryButton } from '~Root/components/Button';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { ErrorResponse } from '~Root/utils';
import { FieldPath } from 'react-hook-form/dist/types/path/eager';
import Verification from './Verification';

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .when('showEmail', {
      is: true,
      then: s => s.required(),
    }),
  phoneNumber: yup.string().when('showEmail', {
    is: false,
    then: s => s.required(),
  }),
  password: yup.string().required(),
});

type FormPayload = ILoginEmailRequested &
  ILoginPhoneRequested & {
    showEmail: boolean;
  };

type Props = NativeStackScreenProps<AuthNavigatorParamsList, AppRoute.LOGIN>;

const LoginScreen = ({ navigation }: Props) => {
  const {
    control,
    handleSubmit,
    watch,
    setFocus,
    setError,
    formState: { isValid, isSubmitting },
    setValue,
    getValues,
  } = useForm<FormPayload>({
    shouldUnregister: true,
    defaultValues: {
      showEmail: false,
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [is2FA, setIs2FA] = useState(false);
  const [phone2FA, setPhone2FA] = useState('');
  const [token2FA, setToken2FA] = useState('');
  const [isChecked, setCheckBox] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [selectedCallingCode, setSelectedCallingCode] = useState('');

  const onLogin = async () => {
    const { showEmail, ...payload } = getValues();
    try {
      if (showEmail) {
        const auth = await AuthApi.loginByEmail({
          ...payload,
          rememberMe: isChecked,
        });
        if (auth) {
          dispatch(authActions.setAuth(auth as IAuth));
        }
      } else {
        const auth = await AuthApi.loginByPhone({
          ...payload,
          rememberMe: isChecked,
        });
        if (auth) {
          dispatch(authActions.setAuth(auth as IAuth));
        }
      }
    } catch (e) {
      if (e instanceof Auth2FARequested) {
        setIs2FA(true);
        setPhone2FA(e.phoneNumber);
        setToken2FA(e.token2FA);
        return;
      }
      if (e instanceof ErrorResponse) {
        const errorCode = `errors.${e.code}`;
        setError('password', {
          message:
            t(errorCode) !== errorCode
              ? t(errorCode) || ''
              : 'Invalid user credentials',
        });
      }
    }
  };

  const verify2FA = async (code: string) => {
    const auth = await AuthApi.verify2FA(token2FA, code);
    if (auth) {
      dispatch(authActions.setAuth(auth as IAuth));
    }
  };

  const showEmail = watch('showEmail');

  const onSubmitEditing = (key: FieldPath<FormPayload>) => () => {
    setFocus(key);
  };

  const onForgotPassword = () => {
    navigation.navigate(AppRoute.FORGOT_PASSWORD);
  };

  const onCheckboxChange = () => {
    setCheckBox(!isChecked);
  };

  const onToggleHiddenPassword = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const onSwitch = useCallback(() => {
    setValue('showEmail', !showEmail, { shouldValidate: true });
    if (selectedCallingCode) {
      setValue('phoneNumber', `+${selectedCallingCode}`);
    }
  }, [showEmail, selectedCallingCode, setValue]);

  const onSelectedCode = useCallback(
    (callingCode: any) => {
      setSelectedCallingCode(callingCode);
      setValue('phoneNumber', `+${callingCode}`);
    },
    [setValue],
  );

  return (
    <SafeAreaLayout>
      <AuthHeader
        showLeft={true}
        style={GlobalStyles.mb50}
        onPressLeft={navigation.goBack}
      />
      {!is2FA && (
        <KeyboardAvoidingView>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
            <View style={[GlobalStyles.flexCol, GlobalStyles.ph15]}>
              <View style={[GlobalStyles.flexCol, GlobalStyles.mb30]}>
                <View style={GlobalStyles.mb15}>
                  {showEmail ? (
                    <FieldInputControl
                      label={t('email')}
                      linkText={t('login_phone_number')}
                      onPressLink={onSwitch}
                      control={control}
                      name="email"
                      autoFocus={true}
                      onSubmitEditing={onSubmitEditing('password')}
                      keyboardType="email-address"
                    />
                  ) : (
                    <View style={GlobalStyles.flexRow}>
                      <CountryCodePicker
                        containerStyle={GlobalStyles.mr10}
                        label="Code"
                        onValueChange={onSelectedCode}
                      />
                      <FieldInputControl
                        label={t('phone')}
                        linkText={t('login_email')}
                        onPressLink={onSwitch}
                        control={control}
                        name="phoneNumber"
                        autoFocus={true}
                        onSubmitEditing={onSubmitEditing('password')}
                        keyboardType="number-pad"
                      />
                    </View>
                  )}
                </View>
                <FieldInputControl
                  label={t('password')}
                  secureTextEntry={secureTextEntry}
                  control={control}
                  name="password"
                  styleContainer={GlobalStyles.mb15}
                  icon={
                    <Image
                      source={IMAGES.iconEye16x16}
                      resizeMode="contain"
                      style={GlobalStyles.icon16x16}
                    />
                  }
                  onPressIcon={onToggleHiddenPassword}
                  onSubmitEditing={handleSubmit(onLogin)}
                />
                <View
                  style={[
                    GlobalStyles.flexRow,
                    GlobalStyles.justifyBetween,
                    GlobalStyles.itemsCenter,
                    GlobalStyles.mb20,
                  ]}>
                  <CheckBox
                    text={t('remember_me')}
                    isChecked={isChecked}
                    onChange={onCheckboxChange}
                    iconStyle={{ ...GlobalStyles.mr5 }}
                  />
                  <Link
                    onPress={onForgotPassword}
                    regular
                    p
                    colorVariant={ColorVariant.EXTRA2}
                    title={t('forgot_password')}
                  />
                </View>
                <View style={[GlobalStyles.pb25]}>
                  <PrimaryButton
                    title={t('next')}
                    onPress={handleSubmit(onLogin)}
                    disabled={!isValid}
                    loading={isSubmitting}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      )}
      {is2FA && (
        <Verification
          phoneNumber={phone2FA}
          onResendCode={onLogin}
          onVerify={verify2FA}
        />
      )}
    </SafeAreaLayout>
  );
};

export default LoginScreen;
