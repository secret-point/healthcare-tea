import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { GlobalStyles } from '~Root/config/styles';
import { Header, Paragraph, Radio, SectionHeading } from '~Root/components';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { ColorVariant } from '~Root/components/Paragraph';
import { FlatButton, PrimaryButton } from '~Root/components/Button';
import { goBack, navigate } from '~Root/navigation';
import { Image, Link } from '~Root/components';
import { IMAGES, useAppSelector } from '~Root/config';
import {
  ANXIETY_ASSESSMENT_QESTUION_OPTIONS,
  ANXIETY_ASSESSMENT_QUESTIONS,
} from '~Root/utils';
import { MainNavigatorParamsList } from '~Root/navigation/config';
import { AppRoute } from '~Root/navigation/AppRoute';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { anxietyAssessmentActions } from '~Root/services/anxietyAssessment/slice';

type Props = NativeStackScreenProps<
  MainNavigatorParamsList,
  AppRoute.ANXIETY_ASSESSMENT
>;

export const AnxietyAssessment = ({ navigation, route }: Props) => {
  const { t } = useTranslation();
  const { step, nextScreen = '' } = route.params;
  const dispatch = useDispatch();
  const { answers } = useAppSelector(state => state.anxietyAssessmentState);

  const handleStep = (newStep: number) => {
    navigation.navigate(AppRoute.ANXIETY_ASSESSMENT, {
      step: newStep < 8 ? newStep : -1,
      nextScreen: nextScreen,
    });
  };

  const handleSelect = (index: number) => {
    dispatch(
      anxietyAssessmentActions.setAnswer({ step, focusedOption: index }),
    );
  };

  const onFinish = () => {
    navigation.popToTop();
    if (nextScreen === 'home') {
      navigation.popToTop();
      navigate(AppRoute.MAIN_NAVIGATOR);
    } else {
      navigate(AppRoute.LEARNING_NAVIGATOR, {
        screen: AppRoute.EXPLORATION,
        initial: false,
      });
    }
  };

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={goBack}
        isBack={step > 0}
        title={t('anxiety_assessment')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
        {...(step > 0 && { onSkip: onFinish })}
      />

      {step > 0 ? (
        <View
          style={[
            GlobalStyles.flexCol,
            GlobalStyles.flexGrow1,
            GlobalStyles.justifyBetween,
            GlobalStyles.ph15,
            GlobalStyles.mb20,
          ]}>
          <View style={[GlobalStyles.justifyBetween]}>
            <Paragraph style={GlobalStyles.mb5} title={`${step} of 8`} />
            <SectionHeading title={t(ANXIETY_ASSESSMENT_QUESTIONS[step])} />
            {ANXIETY_ASSESSMENT_QESTUION_OPTIONS.map((option, index) => (
              <Radio
                key={option}
                name={t(option)}
                onSelect={() => handleSelect(index)}
                selected={answers[step] === index}
              />
            ))}
          </View>
          <View
            style={[
              GlobalStyles.flexRow,
              step > 1 ? GlobalStyles.justifyBetween : GlobalStyles.justifyEnd,
            ]}>
            {step > 1 && (
              <FlatButton
                title={t('back')}
                onPress={() => handleStep(step - 1)}
                isIconLeft={
                  <Image
                    source={IMAGES.iconBack24x24}
                    resizeMode="cover"
                    style={[GlobalStyles.icon18x18, GlobalStyles.mr10]}
                  />
                }
              />
            )}
            <PrimaryButton
              title={t('next')}
              onPress={() => handleStep(step + 1)}
              isIconRight={
                <Image
                  source={IMAGES.iconNext24x24}
                  resizeMode="cover"
                  style={[GlobalStyles.icon18x18, GlobalStyles.ml10]}
                />
              }
            />
          </View>
        </View>
      ) : (
        <View style={[GlobalStyles.ph15, GlobalStyles.mb20]}>
          <View
            style={[
              GlobalStyles.justifyCenter,
              GlobalStyles.itemsCenter,
              GlobalStyles.gap15,
              styles.resultTextWrapper,
            ]}>
            <Paragraph title="Low Anxiety risk!" bold h3 />
            <Paragraph title="Keep practicing your daily meditation, you are doing great!" />
          </View>
          <PrimaryButton title={t('lets_get_started')} onPress={onFinish} />
        </View>
      )}
    </SafeAreaLayout>
  );
};
