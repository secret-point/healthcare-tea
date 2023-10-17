import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { Image, Link, Paragraph } from '~Root/components';
import { IMAGES } from '~Root/config';

import { GlobalStyles } from '~Root/config/styles';
import { ColorVariant } from '~Root/components/Paragraph';
import { FlatButton, PrimaryButton } from '~Root/components/Button';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { goBack, navigate } from '~Root/navigation';
import { AppRoute } from '~Root/navigation/AppRoute';

type Props = {
  onNext: () => void;
  onSkip: () => void;
  children: ReactElement;
  currentStep: number;
  maxStep: number;
};

const QuestionYourSelfWrapper = ({
  children,
  onNext,
  onSkip,
  currentStep,
  maxStep,
}: Props) => {
  const { t } = useTranslation();

  return (
    <SafeAreaLayout edges={['bottom']}>
      <View
        style={[
          GlobalStyles.ph15,
          GlobalStyles.container,
          GlobalStyles.justifyCenter,
        ]}>
        <View style={[GlobalStyles.itemsCenter, GlobalStyles.justifyCenter]}>
          <Image
            source={IMAGES.logoWhite}
            resizeMode="cover"
            style={GlobalStyles.icon110x180}
          />
        </View>
        <Paragraph
          textWhite
          semibold
          h4
          title={t('tell_about_yourself')}
          style={[GlobalStyles.lineHeight22]}
        />
        <Paragraph
          colorVariant={ColorVariant.EXTRA2}
          regular
          p
          title="Lorem ipsum dolor sit amet, consectetur"
          style={[GlobalStyles.lineHeight18, GlobalStyles.mb20]}
        />
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.itemsCenter,
            GlobalStyles.justifyBetween,
          ]}>
          <Paragraph
            colorVariant={ColorVariant.EXTRA2}
            h5
            medium
            title={`${currentStep} of ${maxStep}`}
            style={GlobalStyles.ph10}
          />
          <Link
            colorVariant={ColorVariant.EXTRA2}
            h5
            medium
            title={t('skip')}
            onPress={onSkip}
          />
        </View>
        {children}
        <View style={[GlobalStyles.flexRow, GlobalStyles.justifyBetween]}>
          <FlatButton
            title={t('back')}
            onPress={goBack}
            isIconLeft={
              <Image
                source={IMAGES.iconBack24x24}
                resizeMode="cover"
                style={[GlobalStyles.icon18x18, GlobalStyles.mr10]}
              />
            }
          />
          <PrimaryButton
            title={t('next')}
            onPress={onNext}
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
    </SafeAreaLayout>
  );
};

export default QuestionYourSelfWrapper;
