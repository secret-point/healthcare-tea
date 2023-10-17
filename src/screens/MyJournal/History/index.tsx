import React from 'react';
import { SectionList, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';

import FastImage from '~Root/components/FastImage';
import { GlobalStyles } from '~Root/config/styles';
import {
  Header,
  Paragraph,
  TitleToolBox,
  SectionHeading,
} from '~Root/components';
import { MOCK_DATA_JOURNEY_HISTORY } from '~Root/utils';
import { AppRoute } from '~Root/navigation/AppRoute';
import { LearningNavigatorParamsList } from '~Root/navigation/config';
import { ColorVariant } from '~Root/components/Paragraph';
import { useAppTheme } from '~Root/services/theme/hook';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';

type Props = NativeStackScreenProps<
  LearningNavigatorParamsList,
  AppRoute.MY_JOURNEY_HISTORY
>;

const MyJournalHistoryScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const { globalStyles } = useAppTheme(true);

  const onBack = () => {
    navigation.goBack();
  };

  const onDetail = () => {
    navigation.navigate(AppRoute.MY_JOURNEY_HISTORY_DETAIL);
  };

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={onBack}
        isBack={true}
        title={t('journey_history') ?? ''}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <View style={GlobalStyles.ph15}>
        <SectionList
          sections={[MOCK_DATA_JOURNEY_HISTORY[0]]}
          keyExtractor={(item: any, index) =>
            `journey-history-${item?.id + index}`
          }
          renderItem={({ item }) => (
            <TitleToolBox
              containerStyle={[
                GlobalStyles.flexRow,
                GlobalStyles.itemsCenter,
                GlobalStyles.p10,
                GlobalStyles.mb10,
                GlobalStyles.gap10,
              ]}>
              <FastImage
                source={{ uri: item.image }}
                resizeMode={FastImage.resizeMode.cover}
                style={[GlobalStyles.icon40x40, GlobalStyles.rounded64]}
              />
              <Paragraph
                colorVariant={ColorVariant.CONTRAST}
                semibold
                p
                title={item?.title}
                style={GlobalStyles.flexShrink1}
              />
            </TitleToolBox>
          )}
          renderSectionHeader={() => (
            <SectionHeading
              title={t('recently')}
              linkText={t('see_all')}
              onPressLink={onDetail}
              containerStyles={[
                GlobalStyles.pb20,
                GlobalStyles.mb0,
                globalStyles.bgPrimary,
              ]}
            />
          )}
        />
      </View>
    </SafeAreaLayout>
  );
};

export default MyJournalHistoryScreen;
