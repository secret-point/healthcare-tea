import React from 'react';
import { View } from 'react-native';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import QuizWrapper from '../index';
import { GlobalStyles } from '~Root/config';
import { Paragraph, Radio } from '~Root/components';
import { useTranslation } from 'react-i18next';
import { ColorVariant } from '~Root/components/Paragraph';
import { QuestionNavigatorParamsList } from '~Root/navigation/config';
import { AppRoute } from '~Root/navigation/AppRoute';
import { IPatient, Language } from '~Root/services/auth/types';
import { useAuth } from '~Root/services/auth/hook';
import Loading from '../../../../components/Loading';
import axios from '~Root/config/axios';
import { showError } from '~Root/utils/toast';

const LANGUAGES = [
  { code: Language.EN, name: 'English' },
  { code: Language.AR, name: 'Arabic' },
  { code: Language.TR, name: 'Turkey' },
];

const schema = yup.object().shape({
  languageCode: yup
    .string()
    .required()
    .oneOf([Language.EN, Language.AR, Language.TR]),
});

type Props = NativeStackScreenProps<
  QuestionNavigatorParamsList,
  AppRoute.QUIZ_STEP3
>;

const Step3Screen = ({ navigation }: Props) => {
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

  const languageCode = watch('languageCode');

  const setLanguageCode = (value: Language) => {
    setValue('languageCode', value, {
      shouldValidate: true,
    });
  };

  const onSubmit = async (payload: IPatient) => {
    try {
      await axios.patch(`/patients/${auth.id}`, payload);
      navigation.navigate(AppRoute.QUIZ_STEP4);
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
      currentStep={3}
      maxStep={4}>
      {isSubmitting ? <Loading fill /> : null}
      <View style={[GlobalStyles.container, GlobalStyles.mt10]}>
        <Paragraph
          textWhite
          semibold
          h4
          title={t('your_preferred_language')}
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
          {LANGUAGES.map(item => (
            <Radio
              key={item.code}
              name={item.name}
              styleContainer={GlobalStyles.mb10}
              onSelect={() => setLanguageCode(item.code)}
              selected={item.code === languageCode}
            />
          ))}
        </View>
      </View>
    </QuizWrapper>
  );
};

export default Step3Screen;
