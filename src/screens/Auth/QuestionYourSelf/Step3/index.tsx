import { View } from 'react-native';
import React, { useState } from 'react';

import QuestionYourSelfWrapper from '../index';
import { GlobalStyles } from '~Root/config';
import { Paragraph, Radio } from '~Root/components';
import { useTranslation } from 'react-i18next';
import { AppRoute } from '~Root/navigation/AppRoute';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { QuestionYourselfNavigatorParamsList } from '~Root/navigation/config';

const MOCK_DATA = [
  { id: 1, name: 'Sit' },
  { id: 2, name: 'Dolor' },
  { id: 3, name: 'Lorem' },
  { id: 3, name: 'Ipsum' },
];

type Props = NativeStackScreenProps<
  QuestionYourselfNavigatorParamsList,
  AppRoute.QUESTION_YOURSELF_STEP3
>;

const QuestionYourSelfStep3Screen = ({ navigation }: Props) => {
  const [data, setData] = useState<number | null>(null);

  const { t } = useTranslation();

  const onSelect = (bool: number) => {
    setData(bool);
  };

  const onNext = () => {
    navigation.navigate(AppRoute.QUESTION_YOURSELF_STEP4);
  };
  const onSkip = () => {
    navigation.navigate(AppRoute.QUESTION_YOURSELF_STEP4);
  };
  return (
    <QuestionYourSelfWrapper
      onSkip={onSkip}
      onNext={onNext}
      currentStep={3}
      maxStep={6}>
      <View style={[GlobalStyles.container, GlobalStyles.mt10]}>
        <Paragraph
          textWhite
          semibold
          h4
          title={t('impressive_for_you', {
            rank: t('the_place_three'),
          })}
          style={[GlobalStyles.lineHeight22, GlobalStyles.mb10]}
        />
        <View style={GlobalStyles.ph10}>
          {MOCK_DATA.map((item, index) => (
            <Radio
              key={`question-3-${index}-${item.id}`}
              name={item.name}
              styleContainer={GlobalStyles.mb5}
              onSelect={() => onSelect(index)}
              selected={index === data}
            />
          ))}
        </View>
      </View>
    </QuestionYourSelfWrapper>
  );
};

export default QuestionYourSelfStep3Screen;
