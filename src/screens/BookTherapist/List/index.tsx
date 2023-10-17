import React from 'react';
import { FlatList, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { GlobalStyles } from '~Root/config/styles';
import { Header, SearchInput, TabControl, UserToolBox } from '~Root/components';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { goBack, navigate } from '~Root/navigation';
import FilterButton from '~Root/components/Layout/Filter/Button';
import { AppRoute } from '~Root/navigation/AppRoute';

const therapists = [
  {
    id: 1,
    name: 'Dr. Maria Hudson',
    major: 'Psychologist',
    price: '$12',
  },
  {
    id: 2,
    name: 'Dr. Maria 2',
    major: 'Psychologist',
    price: '$12',
  },
  {
    id: 3,
    name: 'Dr. Maria 3',
    major: 'Psychologist',
    price: '$12',
  },
  {
    id: 4,
    name: 'Dr. Maria 4',
    major: 'Psychologist',
    price: '$12',
  },
  {
    id: 5,
    name: 'Dr. Maria 5',
    major: 'Psychologist',
    price: '$12',
  },
  {
    id: 6,
    name: 'Dr. Maria 6',
    major: 'Psychologist',
    price: '$12',
  },
];

const BookTherapistListScreen = () => {
  const { t } = useTranslation();

  const goToTherapistProfile = () => {
    navigate(AppRoute.BOOK_THERAPIST_NAVIGATOR, {
      screen: AppRoute.THERAPIST_DETAIL,
      initial: false,
    });
  };

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={goBack}
        isBack={true}
        title={t('book_your_therapist')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <View style={[GlobalStyles.container, GlobalStyles.ph15]}>
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.itemsCenter,
            GlobalStyles.mb20,
          ]}>
          <SearchInput
            styleContainer={[GlobalStyles.container, GlobalStyles.mr10]}
          />
          <FilterButton />
        </View>
        <TabControl
          values={[t('recommended'), t('all_therapists')]}
          selectedIndex={0}
          style={GlobalStyles.mb20}
        />
        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={therapists}
          contentContainerStyle={GlobalStyles.gap10}
          keyExtractor={item => `${item.id}`}
          renderItem={({ item }) => (
            <UserToolBox
              name={item.name}
              major={item.major}
              price={item.price}
              containerStyle={GlobalStyles.mb10}
              onPressUser={goToTherapistProfile}
            />
          )}
        />
      </View>
    </SafeAreaLayout>
  );
};

export default BookTherapistListScreen;
