import { View } from 'react-native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import QuestionYourSelfWrapper from '../index';
import { Paragraph, Radio } from '~Root/components';
import { GlobalStyles } from '~Root/config';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { QuestionYourselfNavigatorParamsList } from '~Root/navigation/config';
import { AppRoute } from '~Root/navigation/AppRoute';

const MOCK_DATA = [
  { id: 1, name: 'Ipsum' },
  { id: 2, name: 'Sit' },
  { id: 3, name: 'Dolor' },
  { id: 3, name: 'Lorem' },
];

type Props = NativeStackScreenProps<
  QuestionYourselfNavigatorParamsList,
  AppRoute.QUESTION_YOURSELF_STEP2
>;

const QuestionYourSelfStep2Screen = ({ navigation }: Props) => {
  const [data, setData] = useState<number | null>(null);

  const { t } = useTranslation();

  const onSelect = (bool: number) => {
    setData(bool);
  };

  const onNext = () => {
    navigation.navigate(AppRoute.QUESTION_YOURSELF_STEP3);
  };
  const onSkip = () => {
    navigation.navigate(AppRoute.QUESTION_YOURSELF_STEP3);
  };

  return (
    <QuestionYourSelfWrapper onSkip={onSkip} onNext={onNext} currentStep={2} maxStep={6}>
      <View style={[GlobalStyles.container, GlobalStyles.mt10]}>
        <Paragraph
          textWhite
          semibold
          h4
          title={t('impressive_for_you', {
            rank: t('the_place_two'),
          })}
          style={[GlobalStyles.lineHeight22, GlobalStyles.mb10]}
        />
        <View style={GlobalStyles.ph10}>
          {MOCK_DATA.map((item, index) => (
            <Radio
              key={`question-2-${index}-${item.id}`}
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

export default QuestionYourSelfStep2Screen;
