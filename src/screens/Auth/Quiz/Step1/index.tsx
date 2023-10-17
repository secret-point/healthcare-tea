import React from 'react';
import { View } from 'react-native';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import axios from '~Root/config/axios';
import { yupResolver } from '@hookform/resolvers/yup';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import QuizWrapper from '../index';
import { Paragraph, Radio } from '~Root/components';
import { useTranslation } from 'react-i18next';
import { GlobalStyles } from '~Root/config';
import { ColorVariant } from '~Root/components/Paragraph';
import { QuestionNavigatorParamsList } from '~Root/navigation/config';
import { AppRoute } from '~Root/navigation/AppRoute';
import { AgeCode, IPatient } from '~Root/services/auth/types';
import { useAuth } from '~Root/services/auth/hook';
import { showError } from '~Root/utils/toast';
import Loading from '../../../../components/Loading';

type Props = NativeStackScreenProps<
  QuestionNavigatorParamsList,
  AppRoute.QUIZ_STEP1
>;

const schema = yup.object().shape({
  ageCode: yup.string().required().oneOf([AgeCode.TEENAGE, AgeCode.ADULT]),
});

const Step1Screen = ({ navigation }: Props) => {
  React.useEffect(
    () =>
      navigation.addListener('beforeRemove', e => {
        e.preventDefault();
      }),
    [navigation],
  );
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

  const ageCode = watch('ageCode');

  const setAgeCode = (value: AgeCode) => {
    setValue('ageCode', value, {
      shouldValidate: true,
    });
  };

  const onSubmit = async (payload: IPatient) => {
    try {
      await axios.patch(`/patients/${auth.id}`, payload);
      navigation.navigate(AppRoute.QUIZ_STEP2);
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
      currentStep={1}
      maxStep={4}>
      {isSubmitting ? <Loading fill /> : null}
      <View style={[GlobalStyles.container, GlobalStyles.mt10]}>
        <Paragraph
          textWhite
          semibold
          h4
          title={t('life_journey')}
          style={[GlobalStyles.lineHeight22, GlobalStyles.mb10]}
        />
        <Paragraph
          colorVariant={ColorVariant.EXTRA2}
          regular
          h5
          title={t('this_will_help_us_brew_you')}
          style={[GlobalStyles.lineHeight18, GlobalStyles.mb50]}
        />
        <View style={GlobalStyles.ph10}>
          <Radio
            name={t('i_am_a_teenager')}
            styleContainer={GlobalStyles.mb10}
            onSelect={() => setAgeCode(AgeCode.TEENAGE)}
            selected={ageCode === AgeCode.TEENAGE}
          />
          <Radio
            name={t('i_am_an_adult')}
            onSelect={() => setAgeCode(AgeCode.ADULT)}
            selected={ageCode === AgeCode.ADULT}
          />
        </View>
      </View>
    </QuizWrapper>
  );
};

export default Step1Screen;
