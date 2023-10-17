import { View } from 'react-native';
import React, { useState } from 'react';

import QuestionYourSelfWrapper from '../index';
import { useTranslation } from 'react-i18next';
import { Paragraph, Radio } from '~Root/components';
import { GlobalStyles } from '~Root/config';
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
  AppRoute.QUESTION_YOURSELF_STEP5
>;

const QuestionYourSelfStep5Screen = ({ navigation }: Props) => {
  const [data, setData] = useState<number | null>(null);

  const { t } = useTranslation();

  const onSelect = (bool: number) => {
    setData(bool);
  };

  const onNext = () => {
    navigation.navigate(AppRoute.QUESTION_YOURSELF_STEP6);
  };
  const onSkip = () => {
    navigation.navigate(AppRoute.QUESTION_YOURSELF_STEP6);
  };
  return (
    <QuestionYourSelfWrapper
      onSkip={onSkip}
      onNext={onNext}
      currentStep={5}
      maxStep={6}>
      <View style={[GlobalStyles.container, GlobalStyles.mt10]}>
        <Paragraph
          textWhite
          semibold
          h4
          title={t('impressive_for_you', {
            rank: t('the_place_other', { count: 5 }),
          })}
          style={[GlobalStyles.lineHeight22, GlobalStyles.mb10]}
        />
        <View style={GlobalStyles.ph10}>
          {MOCK_DATA.map((item, index) => (
            <Radio
              key={`question-5-${index}-${item.id}`}
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

export default QuestionYourSelfStep5Screen;
