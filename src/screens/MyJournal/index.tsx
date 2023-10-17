import React, { useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { GlobalStyles } from '~Root/config/styles';
import {
  AddButton,
  Header,
  Paragraph,
  SearchInput,
  TitleToolBox,
} from '~Root/components';
import { FlatList } from 'react-native-gesture-handler';

import { AppRoute } from '~Root/navigation/AppRoute';
import { useAppTheme } from '~Root/services/theme/hook';
import { LearningNavigatorParamsList } from '~Root/navigation/config';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { diffNow } from '~Root/utils/date';
import { useJournal } from '~Root/services/journal/hook';

type Props = NativeStackScreenProps<
  LearningNavigatorParamsList,
  AppRoute.MY_JOURNAL
>;

const MyJournalScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const { globalStyles, theme } = useAppTheme(true);
  const [textSearch, setTextSearch] = useState('');
  const { result } = useJournal({ query: textSearch });
  const {
    data: res,
    isSuccess,
    isFetching,
    hasNextPage,
    fetchNextPage,
  } = result;

  const onBack = () => {
    navigation.goBack();
  };

  const onDetail = () => {
    navigation.navigate(AppRoute.MY_JOURNAL_DETAIL);
  };

  const handleAddJournal = () => {
    navigation.navigate(AppRoute.MY_JOURNAL_CREATE);
  };

  const loadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <SafeAreaLayout>
      <AddButton onPress={handleAddJournal} />

      <Header
        onBackPress={onBack}
        isBack={true}
        title={t('my_journal')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <View style={[GlobalStyles.ph15, GlobalStyles.container]}>
        <FlatList
          stickyHeaderIndices={[0]}
          ListHeaderComponent={
            <SearchInput
              textSearch={textSearch}
              setTextSearch={setTextSearch}
            />
          }
          stickyHeaderHiddenOnScroll
          ListHeaderComponentStyle={[globalStyles.bgPrimary, GlobalStyles.pb20]}
          showsVerticalScrollIndicator={false}
          data={isSuccess ? res?.pages.map(page => page.data).flat() : []}
          keyExtractor={item => `journal-${item.createdAt}`}
          contentContainerStyle={GlobalStyles.pb30}
          renderItem={({ item }) => (
            <TitleToolBox containerStyle={GlobalStyles.mb15} onPress={onDetail}>
              <Paragraph
                numberOfLines={1}
                ellipsizeMode="tail"
                textWhite
                semibold
                h5
                title={item?.text}
                style={GlobalStyles.mb5}
              />
              <Paragraph textWhite regular p title={diffNow(item.createdAt)} />
            </TitleToolBox>
          )}
          onEndReached={loadMore}
          onEndReachedThreshold={0.3}
          ListFooterComponent={
            isFetching ? (
              <ActivityIndicator size="large" color={theme.contrastColor} />
            ) : null
          }
        />
      </View>
    </SafeAreaLayout>
  );
};

export default MyJournalScreen;
