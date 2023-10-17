import React, { useCallback, useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import badWords from '~Root/utils/badWords';
import { AppRoute } from '~Root/navigation/AppRoute';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AuthNavigatorParamsList } from '~Root/navigation/config';


import {
  AuthHeader,
  CheckBox,
  CountryCodePicker,
  FieldInputControl,
} from '~Root/components';
import { GlobalStyles, IMAGES } from '~Root/config';
import { PrimaryButton } from '~Root/components/Button';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { IRegisterRequest } from '~Root/services/auth/types';
import { AuthApi } from '~Root/services/auth/apis';
import { authActions } from '~Root/services/auth/slice';
import { ErrorResponse } from '~Root/utils';
import { useDispatch } from 'react-redux';
import { showError } from '~Root/utils/toast';
import { FieldPath } from 'react-hook-form/dist/types/path/eager';
import { goBack, navigate } from '~Root/navigation';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required()
    .test('blacklist', 'Name contains a forbidden word.', value => {
      if (value) {
        const words = value.toLowerCase().split(' ');
        return !words.some(word => badWords.includes(word));
      }
      return true;
    }),
  lastName: yup
    .string()
    .required()
    .test('blacklist', 'Surname contains a forbidden word.', value => {
      if (value) {
        const words = value.toLowerCase().split(' ');
        return !words.some(word => badWords.includes(word));
      }
      return true;
    }),
  phoneNumber: yup.string().required(),
  email: yup.string().required().email('Email must be valid.'),
  password: yup
    .string()
    .min(10, 'Password should contain minimun 10 characters.')
    .required(),
  confirmPassword: yup
    .string()
    .min(10, 'Confirm password should contain minimun 10 characters.')
    .required()
    .oneOf([yup.ref('password')], 'Passwords must match'),
  terms: yup
    .boolean()
    .required('The terms and conditions must be accepted.')
    .oneOf([true], 'The terms and conditions must be accepted.'),
  policy: yup
    .boolean()
    .required('The policy must be accepted.')
    .oneOf([true], 'The policy must be accepted.'),
});

type Props = NativeStackScreenProps<AuthNavigatorParamsList, AppRoute.REGISTER>;

const RegisterScreen = ({ navigation, route }: Props) => {
  const {
    control,
    handleSubmit,
    setFocus,
    formState: { isValid, isSubmitting },
    watch,
    setValue,
  } = useForm<IRegisterRequest>({
    defaultValues: {
      terms: false,
      policy: false,
    },
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const { role } = route.params;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [secureTextEntry, setSecureTextEntry] = useState({
    password: true,
    confirm: true,
  });

  const terms = watch('terms');
  const policy = watch('policy');

  const onSignUp = async (values: IRegisterRequest) => {
    try {
      let auth;
      if (role === 'therapist') {
        auth = await AuthApi.therapistRegister(values);
      } else {
        auth = await AuthApi.patientRegister(values);
      }
      dispatch(authActions.setAuth(auth));

      if (role === 'therapist') {
        navigate(AppRoute.THERAPIST_REGISTER_SUCCESS);
      } else {
        navigate(AppRoute.QUIZ_QUESTION);
      }
    } catch (e) {
      if (!(e instanceof ErrorResponse)) {
        return;
      }

      showError({
        text1: e.message,
      });
    }
  };

  const onSubmitEditing = (key: FieldPath<IRegisterRequest>) => () => {
    setFocus(key);
  };

  const onTermChange = () => {
    setValue('terms', !terms, { shouldValidate: true });
  };

  const onPolicyChange = () => {
    setValue('policy', !policy, { shouldValidate: true });
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

  const onSelectedCode = useCallback(
    (callingCode: any) => {
      setValue('phoneNumber', `+${callingCode}`);
    },
    [setValue],
  );

  const goToTerm = () => {
    navigate(AppRoute.AUTH_STATIC, {
      title: 'term_&_conditions',
      queryKey: 'terms',
    });
  };

  const goToPrivacy = () => {
    navigate(AppRoute.AUTH_STATIC, {
      title: 'privacy_&_data_collection',
      queryKey: 'privacy',
    });
  };

  return (
    <SafeAreaLayout edges={['bottom']}>
      <AuthHeader
        showLeft={true}
        style={GlobalStyles.mb20}
        onPressLeft={goBack}
      />

      <KeyboardAvoidingView style={GlobalStyles.container}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}>
          <View style={[GlobalStyles.flexCol, GlobalStyles.ph15]}>
            <View style={[GlobalStyles.flexCol, GlobalStyles.mb30]}>
              <FieldInputControl
                styleContainer={GlobalStyles.mb15}
                label={t('name')}
                control={control}
                name="firstName"
                autoFocus={true}
                onSubmitEditing={onSubmitEditing('lastName')}
              />
              <FieldInputControl
                styleContainer={GlobalStyles.mb15}
                label={t('surname')}
                control={control}
                name="lastName"
                onSubmitEditing={onSubmitEditing('phoneNumber')}
              />
              <View style={[GlobalStyles.flexRow, GlobalStyles.mb15]}>
                <CountryCodePicker
                  containerStyle={GlobalStyles.mr10}
                  label="Code"
                  onValueChange={onSelectedCode}
                />
                <FieldInputControl
                  label={t('phone')}
                  control={control}
                  name="phoneNumber"
                  onSubmitEditing={onSubmitEditing('email')}
                  keyboardType="number-pad"
                />
              </View>
              <FieldInputControl
                styleContainer={GlobalStyles.mb15}
                label={t('email')}
                control={control}
                name="email"
                onSubmitEditing={onSubmitEditing('password')}
                keyboardType="email-address"
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
                onSubmitEditing={onSubmitEditing('confirmPassword')}
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
              <View style={[GlobalStyles.flexCol, GlobalStyles.mb20]}>
                <CheckBox
                  text={t('agree_terms')}
                  isChecked={terms}
                  onChange={onTermChange}
                  key="terms"
                  iconStyle={{ ...GlobalStyles.mr10 }}
                  onPressText={goToTerm}
                  style={GlobalStyles.mb5}
                />
                <CheckBox
                  text={t('agree_policy')}
                  isChecked={policy}
                  onChange={onPolicyChange}
                  key="policy"
                  onPressText={goToPrivacy}
                  iconStyle={{ ...GlobalStyles.mr10 }}
                />
              </View>
              <View style={[GlobalStyles.pb25]}>
                <PrimaryButton
                  title={t('sign_up')}
                  onPress={handleSubmit(onSignUp)}
                  loading={isSubmitting}
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

export default RegisterScreen;
