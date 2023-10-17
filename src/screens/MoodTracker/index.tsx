import React, { useState } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { GlobalStyles } from '~Root/config/styles';
import {
  Header,
  Paragraph,
  Image,
  CirclePercent,
  TabControl,
} from '~Root/components';
import { IMAGES } from '~Root/config';
import { AppRoute } from '~Root/navigation/AppRoute';
import { LearningNavigatorParamsList } from '~Root/navigation/config';
import { MOCK_FEELING } from '~Root/utils';
import createStyles from './styles';
import { useAppTheme } from '~Root/services/theme/hook';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';

type Props = NativeStackScreenProps<
  LearningNavigatorParamsList,
  AppRoute.MOOD_TRACKER
>;

const MoodTrackerScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const { theme } = useAppTheme();
  const styles = createStyles(theme);

  const [selectedIndex, setSelectedIndex] = useState(1);

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={onBack}
        isBack={true}
        title={t('mood_tracker') ?? ''}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={GlobalStyles.ph15}>
          <View style={GlobalStyles.flexCol}>
            <Paragraph
              textWhite
              medium
              p
              title={t('are_you_feeling')}
              style={GlobalStyles.mb20}
            />
            <View style={GlobalStyles.mb20}>
              <FlatList
                horizontal
                data={MOCK_FEELING}
                renderItem={({ item }) => (
                  <CirclePercent number={item.number} label={item.title} />
                )}
                contentContainerStyle={GlobalStyles.columnGap5}
                keyExtractor={(item, index) => `${index.toString()}`}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <Paragraph
              textWhite
              semibold
              h5
              title={t('analytics')}
              style={GlobalStyles.mb20}
            />
            <TabControl
              values={['Daily', 'Weekly', 'Monthly']}
              selectedIndex={selectedIndex}
              onChange={event => {
                setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
              }}
              style={GlobalStyles.mb20}
            />
            <View style={GlobalStyles.mb20}>
              <Image
                source={IMAGES.chart}
                resizeMode="contain"
                style={styles.icon344x144}
              />
            </View>
            <View style={GlobalStyles.mb20}>
              <Image
                source={IMAGES.chartSad}
                resizeMode="contain"
                style={styles.icon342x151}
              />
            </View>
            <View style={GlobalStyles.mb20}>
              <Image
                source={IMAGES.chartAfraid}
                resizeMode="contain"
                style={styles.icon338x151}
              />
            </View>
            <View style={GlobalStyles.mb20}>
              <Image
                source={IMAGES.chartAngry}
                resizeMode="contain"
                style={styles.icon338x151}
              />
            </View>
            <View style={GlobalStyles.mb20}>
              <Image
                source={IMAGES.chartAverage}
                resizeMode="contain"
                style={styles.icon338x151}
              />
            </View>
            <View style={GlobalStyles.mb20}>
              <Image
                source={IMAGES.chartCalm}
                resizeMode="contain"
                style={styles.icon338x151}
              />
            </View>
            <View style={GlobalStyles.mb20}>
              <Image
                source={IMAGES.chartHappy}
                resizeMode="contain"
                style={styles.icon338x151}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default MoodTrackerScreen;
