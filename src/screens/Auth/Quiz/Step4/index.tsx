import React from 'react';
import { View } from 'react-native';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import QuizWrapper from '../index';
import { useTranslation } from 'react-i18next';
import { Paragraph, Radio } from '~Root/components';
import { GlobalStyles } from '~Root/config';
import { ColorVariant } from '~Root/components/Paragraph';
import { AppRoute } from '~Root/navigation/AppRoute';
import { QuestionNavigatorParamsList } from '~Root/navigation/config';
import { Gender, IPatient } from '~Root/services/auth/types';
import { useAuth } from '~Root/services/auth/hook';
import axios from '~Root/config/axios';
import { showError } from '~Root/utils/toast';
import Loading from '../../../../components/Loading';

const GENDERS = [
  { gender: Gender.FEMALE, name: 'Female' },
  { gender: Gender.MALE, name: 'Male' },
  { gender: Gender.OTHER, name: 'Other' },
  { gender: null, name: 'Prefer not to say' },
];

const schema = yup.object().shape({
  gender: yup
    .string()
    .nullable()
    .oneOf([Gender.FEMALE, Gender.MALE, Gender.OTHER]),
});

type Props = NativeStackScreenProps<
  QuestionNavigatorParamsList,
  AppRoute.QUIZ_STEP4
>;

const Step4Screen = ({ navigation }: Props) => {
  const { t } = useTranslation();

  const { auth } = useAuth();
  const {
    handleSubmit,
    setValue,
    watch,
    formState: { isValid, isSubmitting },
  } = useForm<IPatient>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const gender = watch('gender');

  const setGender = (value: Gender | null) => {
    setValue('gender', value, {
      shouldValidate: true,
    });
  };

  const onSubmit = async (payload: IPatient) => {
    try {
      await axios.patch(`/patients/${auth.id}`, payload);
      navigation.navigate(AppRoute.QUIZ_SUCCESS);
    } catch {
      showError({
        text1: t('some_thing_went_wrong') || '',
      });
    }
  };

  return (
    <QuizWrapper
      disabledNext={!isValid}
      onNext={handleSubmit(onSubmit)}
      currentStep={4}
      maxStep={4}>
      {isSubmitting ? <Loading fill /> : null}
      <View style={[GlobalStyles.container, GlobalStyles.mt10]}>
        <Paragraph
          textWhite
          semibold
          h4
          title={t('gender_identity')}
          style={[GlobalStyles.lineHeight22, GlobalStyles.mb10]}
        />
        <Paragraph
          colorVariant={ColorVariant.EXTRA2}
          regular
          h5
          title={t('select_one_option')}
          style={[GlobalStyles.lineHeight18, GlobalStyles.mb30]}
        />
        <View style={GlobalStyles.ph10}>
          {GENDERS.map(item => (
            <Radio
              key={item.gender}
              name={item.name}
              styleContainer={GlobalStyles.mb10}
              onSelect={() => setGender(item.gender)}
              selected={item.gender === gender}
            />
          ))}
        </View>
      </View>
    </QuizWrapper>
  );
};

export default Step4Screen;
