import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { GlobalStyles } from '~Root/config/styles';
import {
  AddButton,
  MainHeader,
  Paragraph,
  SearchInput,
} from '~Root/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppRoute } from '~Root/navigation/AppRoute';
import { ContentNavigatorParamsList } from '~Root/navigation/config';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import FilterButton from '~Root/components/Layout/Filter/Button';
import ContentListSection from '~Root/screens/Content/partial/ListSection';
import { IContent } from '~Root/services/article/types';
import { useQuery } from '@tanstack/react-query';

type Props = NativeStackScreenProps<
  ContentNavigatorParamsList,
  AppRoute.CONTENT
>;

const ContentScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();

  const [txtSearch, setTxtSearch] = useState('');
  const { data: res, isSuccess } = useQuery<{ data: IContent[] }>({
    queryKey: ['/content/topics/active'],
  });

  const onPressItem = () => {
    // navigation.navigate(AppRoute.CONTENT_DETAIL, { articleId: content.id });
  };

  const onPressAdd = () => {
    navigation.navigate(AppRoute.CONTENT_CREATE);
  };

  return (
    <SafeAreaLayout>
      <AddButton onPress={onPressAdd} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={GlobalStyles.ph15}>
        <MainHeader onBackPress={navigation.goBack} />
        <Paragraph
          textCenter
          textWhite
          bold
          h2
          title={t('content')}
          style={GlobalStyles.mb10}
        />
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.itemsCenter,
            GlobalStyles.container,
            GlobalStyles.mb20,
          ]}>
          <SearchInput
            textSearch={txtSearch}
            setTextSearch={setTxtSearch}
            styleContainer={[GlobalStyles.container, GlobalStyles.mr10]}
          />
          <FilterButton />
        </View>
        {isSuccess &&
          res?.data
            .filter(item => !item.parentId)
            .map(parentItem => (
              <ContentListSection
                id={parentItem.id}
                key={parentItem.id}
                data={res.data.filter(
                  childItem => childItem.parentId === parentItem.id,
                )}
                title={t(parentItem.title)}
                containerStyle={GlobalStyles.mb20}
                onPressItem={onPressItem}
              />
            ))}
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default ContentScreen;
