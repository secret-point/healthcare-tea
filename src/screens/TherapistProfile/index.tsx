import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { GlobalStyles } from '~Root/config/styles';
import {
  Header,
  Link,
  PrimaryButton,
  Tag,
  UserToolBox,
} from '~Root/components';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { goBack, navigate } from '~Root/navigation';
import Paragraph, { ColorVariant } from '../../components/Paragraph';
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
];

const TherapistProfileScreen = () => {
  const { t } = useTranslation();

  const onSingleBooking = () => {
    navigate(AppRoute.BOOK_THERAPIST_BOOKING);
  };

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={goBack}
        isBack={true}
        title={t('therapist_profile')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[GlobalStyles.ph15, GlobalStyles.pb15]}>
        <UserToolBox
          name="Dr. Maria Hudson"
          major="Psychologist"
          containerStyle={GlobalStyles.mb15}
        />
        <PrimaryButton
          title={t('buy_package')}
          bold
          containerStyle={[GlobalStyles.mh10, GlobalStyles.mb15]}
        />
        <Link
          bold
          colorVariant={ColorVariant.CONTRAST}
          textCenter
          h5
          title={t('book_single_session')}
          style={GlobalStyles.mb25}
          onPress={onSingleBooking}
        />
        <View style={[GlobalStyles.flexCol, GlobalStyles.mb20]}>
          <Paragraph
            semibold
            colorVariant={ColorVariant.EXTRA2}
            h5
            title={t('you_can_talk')}
            style={GlobalStyles.mb15}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            directionalLockEnabled={true}
            alwaysBounceVertical={false}>
            <FlatList
              columnWrapperStyle={GlobalStyles.gap10}
              contentContainerStyle={[
                GlobalStyles.gap10,
                GlobalStyles.selfStart,
              ]}
              numColumns={Math.ceil(MOCK_CATEGORIES.length / 2)}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              directionalLockEnabled={true}
              alwaysBounceVertical={false}
              data={MOCK_CATEGORIES}
              keyExtractor={(item, index) => `${index.toString()}`}
              renderItem={({ item }) => <Tag label={item.name} />}
            />
          </ScrollView>
        </View>
        <View style={GlobalStyles.flexCol}>
          <Paragraph
            bold
            colorVariant={ColorVariant.CONTRAST}
            h5
            title={t('about_work_experience')}
            style={GlobalStyles.mb15}
          />
          <Paragraph
            h5
            colorVariant={ColorVariant.CONTRAST}
            regular
            title="I am a Licensed Professional Counselor, based in Abu Dhabi, with over 15 years of experience working as a counselor, behavior modification and life coach. I have worked with clients with a wide range of concerns including depression, anxiety, relationship issues, parenting problems, career challenges, OCD and ADHD. I also helped many people who have experienced physical trauma or emotional abuse. I have counseled many children, families and individuals in a variety of settings. "
            style={GlobalStyles.lineHeight22}
          />
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default TherapistProfileScreen;
