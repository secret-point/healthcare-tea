import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { GlobalStyles } from '~Root/config/styles';
import {
  CardImageExploration,
  MainHeader,
  Paragraph,
  SectionHeading,
} from '~Root/components';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import {
  MOCK_DATA_ANXIETY,
  MOCK_DATA_HEALTHY,
  MOCK_DATA_PARENTING,
  MOCK_DATA_RLATIONSHIPS,
} from '~Root/utils';

const ExplorationScreen = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaLayout>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={GlobalStyles.ph15}>
          <MainHeader />
          <Paragraph
            textCenter
            textWhite
            bold
            h2
            title={t('exploration_space')}
            style={GlobalStyles.mb20}
          />
          <View style={[GlobalStyles.flexCol, GlobalStyles.mb20]}>
            <SectionHeading
              title={t('anxiety_management')}
              linkText={t('see_all')}
            />
            <View>
              <FlatList
                horizontal
                data={MOCK_DATA_ANXIETY}
                renderItem={({ item }) => (
                  <CardImageExploration
                    {...item}
                    styleContainer={GlobalStyles.mr15}
                  />
                )}
                keyExtractor={(item, index) => `anxiety-${index.toString()}`}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={[GlobalStyles.flexCol, GlobalStyles.mb20]}>
            <SectionHeading title={t('parenting')} linkText={t('see_all')} />
            <View>
              <FlatList
                horizontal
                data={MOCK_DATA_PARENTING}
                renderItem={({ item }) => (
                  <CardImageExploration
                    {...item}
                    styleContainer={GlobalStyles.mr15}
                  />
                )}
                keyExtractor={(item, index) => `parenting-${index.toString()}`}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={[GlobalStyles.flexCol, GlobalStyles.mb20]}>
            <SectionHeading title={t('healthy')} linkText={t('see_all')} />
            <View>
              <FlatList
                horizontal
                data={MOCK_DATA_HEALTHY}
                renderItem={({ item }) => (
                  <CardImageExploration
                    {...item}
                    styleContainer={GlobalStyles.mr15}
                  />
                )}
                keyExtractor={(item, index) => `healthy-${index.toString()}`}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={[GlobalStyles.flexCol, GlobalStyles.mb20]}>
            <SectionHeading
              title={t('relationships')}
              linkText={t('see_all')}
            />
            <View>
              <FlatList
                horizontal
                data={MOCK_DATA_RLATIONSHIPS}
                renderItem={({ item }) => (
                  <CardImageExploration
                    {...item}
                    styleContainer={GlobalStyles.mr15}
                  />
                )}
                keyExtractor={(item, index) =>
                  `relationships-${index.toString()}`
                }
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default ExplorationScreen;
