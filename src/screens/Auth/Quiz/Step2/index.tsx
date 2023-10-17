import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import QuizWrapper from '../index';
import { CountryDropDown, Paragraph } from '~Root/components';
import { GlobalStyles } from '~Root/config';
import styles from './styles';
import { AppRoute } from '~Root/navigation/AppRoute';
import { QuestionNavigatorParamsList } from '~Root/navigation/config';
import { ICountry } from '~Root/utils/countries';
import { useAuth } from '~Root/services/auth/hook';
import { IPatient } from '~Root/services/auth/types';
import Loading from '../../../../components/Loading';
import axios from '~Root/config/axios';
import { showError } from '~Root/utils/toast';

type Props = NativeStackScreenProps<
  QuestionNavigatorParamsList,
  AppRoute.QUIZ_STEP2
>;

const schema = yup.object().shape({
  countryCode: yup.string().required(),
});

const Step2Screen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const { auth } = useAuth();
  const {
    handleSubmit,
    setValue,
    formState: { isValid, isSubmitting },
  } = useForm<IPatient>({
    mode: 'onChange',
    resolver: yupResolver(schema),
  });

  const onValueChange = useCallback(
    (country: ICountry | undefined) => {
      setValue('countryCode', country?.alpha2Code, {
        shouldValidate: true,
      });
    },
    [setValue],
  );

  const onSubmit = async (payload: IPatient) => {
    try {
      await axios.patch(`/patients/${auth.id}`, payload);
      navigation.navigate(AppRoute.QUIZ_STEP3);
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
      currentStep={2}
      maxStep={4}>
      {isSubmitting ? <Loading fill /> : null}
      <View style={[GlobalStyles.container, GlobalStyles.mt10]}>
        <Paragraph
          textWhite
          semibold
          h4
          title={t('country_of_residence')}
          style={[GlobalStyles.lineHeight22, GlobalStyles.mb10]}
        />
        <CountryDropDown
          onValueChange={onValueChange}
          toggleContainerStyle={styles.toggleContainerStyle}
        />
      </View>
    </QuizWrapper>
  );
};

export default Step2Screen;
