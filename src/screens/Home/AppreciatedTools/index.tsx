import React, { useState } from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { GlobalStyles } from '~Root/config/styles';
import { Header, Paragraph, SearchInput, TitleToolBox } from '~Root/components';
import { FlatList } from 'react-native-gesture-handler';
import { MOCK_DATA_JOURNAL } from '~Root/utils';
import { AppRoute } from '~Root/navigation/AppRoute';
import { MainNavigatorParamsList } from '~Root/navigation/config';
import { useAppTheme } from '~Root/services/theme/hook';
import { ColorVariant } from '~Root/components/Paragraph';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';

type Props = NativeStackScreenProps<
  MainNavigatorParamsList,
  AppRoute.APPRECIATED_TOOLS
>;

const AppreciatedTools = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const { globalStyles } = useAppTheme(true);
  const [textSearch, setTextSearch] = useState('');

  const onBack = () => {
    navigation.goBack();
  };

  const onDetail = () => {};

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={onBack}
        isBack={true}
        title={t('appreciated_tools')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <View style={GlobalStyles.ph15}>
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
          keyExtractor={({ item, index }: any) =>
            `appreciated-tools-${item?.id}-${index}`
          }
          data={MOCK_DATA_JOURNAL.slice(0, 5)}
          contentContainerStyle={GlobalStyles.pb30}
          renderItem={({ item }) => (
            <TitleToolBox containerStyle={GlobalStyles.mb15} onPress={onDetail}>
              <Paragraph
                numberOfLines={1}
                semibold
                h5
                title={item?.title}
                colorVariant={ColorVariant.CONTRAST}
                style={GlobalStyles.mb5}
              />
              <Paragraph
                colorVariant={ColorVariant.CONTRAST}
                regular
                p
                title={item?.time}
              />
            </TitleToolBox>
          )}
        />
      </View>
    </SafeAreaLayout>
  );
};

export default AppreciatedTools;
