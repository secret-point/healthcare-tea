import React, { useMemo } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { GlobalStyles } from '~Root/config/styles';
import { Header, Loading, Tag } from '~Root/components';
import { AppRoute } from '~Root/navigation/AppRoute';
import { MainNavigatorParamsList } from '~Root/navigation/config';
import styles from './styles';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { useContentTopic } from '~Root/services/article/hook';
import HtmlView from '~Root/components/HtmlView';

type Props = NativeStackScreenProps<
  MainNavigatorParamsList,
  AppRoute.BEING_WELL_DETAIL
>;

const BeingWellDetailScreen = ({ route, navigation }: Props) => {
  const { t } = useTranslation();

  const { result } = useContentTopic({
    topicId: route.params.id,
    onFailed: navigation.goBack,
  });
  const { data, isLoading, isSuccess } = result;

  const onBack = () => {
    navigation.goBack();
  };

  const toolLength = useMemo(
    () => (data ? Math.ceil(data?.tools?.length / 2) : 0),
    [data],
  );

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={onBack}
        isBack={true}
        title={data?.title || t('being_well')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
        titleStyle={styles.titleStyle}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={GlobalStyles.container}>
        {isLoading ? (
          <Loading />
        ) : (
          isSuccess && (
            <View style={[GlobalStyles.ph15]}>
              <View style={GlobalStyles.mb10}>
                <HtmlView html={data.content} />
              </View>
              {data.tools?.length > 0 && (
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  directionalLockEnabled={true}
                  alwaysBounceVertical={false}>
                  <FlatList
                    style={GlobalStyles.mb15}
                    columnWrapperStyle={
                      toolLength > 1 ? GlobalStyles.gap10 : undefined
                    }
                    contentContainerStyle={[
                      GlobalStyles.gap10,
                      GlobalStyles.selfStart,
                    ]}
                    numColumns={toolLength}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    directionalLockEnabled={true}
                    alwaysBounceVertical={false}
                    data={data.tools}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Tag label={item.title} />}
                  />
                </ScrollView>
              )}
            </View>
          )
        )}
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default BeingWellDetailScreen;
