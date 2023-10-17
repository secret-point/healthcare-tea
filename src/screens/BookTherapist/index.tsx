import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { GlobalStyles } from '~Root/config/styles';
import {
  ColorVariant,
  Header,
  Paragraph,
  PrimaryButton,
  Tag,
} from '~Root/components';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { goBack, navigate } from '~Root/navigation';
import { AppRoute } from '~Root/navigation/AppRoute';

interface ICategories {
  id: number;
  name: string;
}

const MOCK_CATEGORIES: ICategories[] = [
  { id: 1, name: 'Anxiety' },
  { id: 2, name: 'Depression' },
  { id: 3, name: 'Loneliness' },
  { id: 4, name: 'Loneliness' },
  { id: 5, name: 'Stress' },
  { id: 6, name: 'Anxiety disorder' },
  { id: 7, name: 'Stress' },
  { id: 8, name: 'Stress' },
  { id: 9, name: 'Stress' },
  { id: 10, name: 'Anxiety disorder' },
  { id: 11, name: 'Stress' },
  { id: 12, name: 'Stress' },
  { id: 13, name: 'Depression' },
  { id: 14, name: 'Loneliness' },
  { id: 15, name: 'Loneliness' },
  { id: 16, name: 'Stress' },
  { id: 17, name: 'Anxiety disorder' },
  { id: 18, name: 'Stress' },
  { id: 19, name: 'Stress' },
  { id: 20, name: 'Depression' },
  { id: 21, name: 'Loneliness' },
  { id: 22, name: 'Loneliness' },
  { id: 23, name: 'Depression' },
  { id: 24, name: 'Loneliness' },
  { id: 25, name: 'Loneliness' },
];

const BookTherapistScreen = () => {
  const { t } = useTranslation();

  const onApply = () => {
    navigate(AppRoute.BOOK_THERAPIST_LIST);
  };

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={goBack}
        isBack={true}
        title={t('book_your_therapist')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[GlobalStyles.ph15, GlobalStyles.pb15]}>
        <Paragraph
          semibold
          colorVariant={ColorVariant.CONTRAST}
          h4
          title={t('what_is_your_current_problem')}
          style={GlobalStyles.mb15}
        />
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          directionalLockEnabled={true}
          alwaysBounceVertical={false}>
          <FlatList
            columnWrapperStyle={GlobalStyles.gap10}
            contentContainerStyle={[GlobalStyles.gap10, GlobalStyles.selfStart]}
            numColumns={Math.ceil(MOCK_CATEGORIES.length / 8)}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            directionalLockEnabled={true}
            alwaysBounceVertical={false}
            data={MOCK_CATEGORIES}
            keyExtractor={(item, index) => `${index.toString()}`}
            renderItem={({ item }) => <Tag label={item.name} />}
          />
        </ScrollView>
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.justifyEnd,
            GlobalStyles.mt15,
          ]}>
          <PrimaryButton title={t('apply')} onPress={onApply} />
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default BookTherapistScreen;
