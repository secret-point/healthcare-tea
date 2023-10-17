import React from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { Image, Paragraph } from '~Root/components';
import { IMAGES } from '~Root/config';

import { GlobalStyles } from '~Root/config/styles';
import { ColorVariant } from '~Root/components/Paragraph';
import { FlatButton, PrimaryButton } from '~Root/components/Button';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { goBack } from '~Root/navigation';

type Props = {
  disabledNext?: boolean;
  onNext: () => void;
  children: React.ReactNode | React.ReactNode[];
  currentStep: number;
  maxStep: number;
};

const QuizWrapper = ({
  disabledNext,
  children,
  onNext,
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
          GlobalStyles.pb15,
        ]}>
        <View style={[GlobalStyles.itemsCenter, GlobalStyles.justifyCenter]}>
          <Image
            source={IMAGES.logoWhite}
            resizeMode="cover"
            style={GlobalStyles.icon110x180}
          />
        </View>
        <Paragraph
          colorVariant={ColorVariant.EXTRA2}
          h5
          medium
          title={`${currentStep} of ${maxStep}`}
          style={GlobalStyles.ph10}
        />
        {children}
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.zIndexBottom,
            currentStep !== 1
              ? GlobalStyles.justifyBetween
              : GlobalStyles.justifyEnd,
          ]}>
          {currentStep !== 1 && (
            <FlatButton
              title={t('back')}
              disabled={currentStep === 1}
              onPress={goBack}
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
            onPress={onNext}
            disabled={disabledNext}
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

export default QuizWrapper;
