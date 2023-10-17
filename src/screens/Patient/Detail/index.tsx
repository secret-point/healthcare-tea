import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { GlobalStyles } from '~Root/config/styles';
import { Tag, Header, SectionHeading } from '~Root/components';
import { AppRoute } from '~Root/navigation/AppRoute';
import { MainNavigatorParamsList } from '~Root/navigation/config';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import PatientDetailAppHistoryCard from '~Root/screens/Patient/Detail/partial/AppHistoryCard';
import PatientDetailHistoryCard from '~Root/screens/Patient/Detail/partial/HistoryCard';
import PatientDetailProfileCard from '~Root/screens/Patient/Detail/partial/ProfileCard';

type Props = NativeStackScreenProps<
  MainNavigatorParamsList,
  AppRoute.PATIENT_DETAIL
>;

const topics = [
  'Anxiety',
  'Depression',
  'Loneliness',
  'Stress',
  'Anxiety disorder',
  'Anxiety',
  'Depression',
  'Loneliness',
  'Stress',
  'Anxiety disorder',
  'Anxiety',
];

const PatientDetailScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={navigation.goBack}
        isBack={true}
        title={t('patient_profile')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={[GlobalStyles.ph15, GlobalStyles.pb15]}>
          <PatientDetailProfileCard containerStyle={GlobalStyles.mb15} />

          <SectionHeading
            title={t('topics_of_interest')}
            linkText={t('see_all')}
          />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            directionalLockEnabled={true}
            alwaysBounceVertical={false}>
            <FlatList
              style={GlobalStyles.mb15}
              columnWrapperStyle={GlobalStyles.gap10}
              contentContainerStyle={[
                GlobalStyles.gap10,
                GlobalStyles.selfStart,
              ]}
              numColumns={Math.ceil(topics.length / 2)}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              directionalLockEnabled={true}
              alwaysBounceVertical={false}
              data={topics}
              keyExtractor={(item, index) => `${index.toString()}`}
              renderItem={({ item }) => <Tag label={item} />}
            />
          </ScrollView>

          <SectionHeading title={t('medial_history')} linkText={t('see_all')} />
          <PatientDetailHistoryCard containerStyle={GlobalStyles.mb15} />

          <SectionHeading
            title={t('therapy_history')}
            linkText={t('see_all')}
          />
          <PatientDetailHistoryCard containerStyle={GlobalStyles.mb15} />

          <SectionHeading title={t('assigned_tools')} linkText={t('see_all')} />
          <PatientDetailHistoryCard containerStyle={GlobalStyles.mb15} />

          <SectionHeading title={t('app_history')} linkText={t('see_all')} />
          <PatientDetailAppHistoryCard
            containerStyle={GlobalStyles.mb10}
            title="Self-esteem test - Test"
          />
          <PatientDetailAppHistoryCard
            containerStyle={GlobalStyles.mb10}
            title="Calming Anxiety - Podcast"
          />
          <PatientDetailAppHistoryCard
            containerStyle={GlobalStyles.mb10}
            title="Daily Meditation for positive energy - Daily Meditation"
          />
          <PatientDetailAppHistoryCard title="Healthy Habits for life - Podcast" />
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default PatientDetailScreen;
