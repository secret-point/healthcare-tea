import React from 'react';
import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { GlobalStyles } from '~Root/config/styles';
import { Button, Header, Image, Paragraph } from '~Root/components';
import { IMAGES } from '~Root/config';
import { ColorVariant } from '~Root/components/Paragraph';
import { useAppTheme } from '~Root/services/theme/hook';
import { AppRoute } from '~Root/navigation/AppRoute';
import { LearningNavigatorParamsList } from '~Root/navigation/config';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';

type Props = NativeStackScreenProps<
  LearningNavigatorParamsList,
  AppRoute.GOALS
>;

const GoalsScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();
  const { globalStyles } = useAppTheme(true);

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={onBack}
        isBack={true}
        title="Goals"
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={GlobalStyles.ph15}>
          <View style={GlobalStyles.flexCol}>
            <Paragraph
              textWhite
              semibold
              h5
              title={t('active_goals')}
              style={GlobalStyles.mb20}
            />
            <View
              style={[
                globalStyles.bgExtra3,
                GlobalStyles.rounded,
                GlobalStyles.pv20,
                GlobalStyles.ph15,
                GlobalStyles.mb15,
              ]}>
              <Paragraph
                colorVariant={ColorVariant.EXTRA2}
                semibold
                h5
                title={t('mediately')}
              />
            </View>
            <View
              style={[
                globalStyles.bgExtra3,
                GlobalStyles.rounded,
                GlobalStyles.pv20,
                GlobalStyles.ph15,
                GlobalStyles.mb15,
              ]}>
              <Paragraph
                colorVariant={ColorVariant.EXTRA2}
                semibold
                h5
                title={t('drink_water')}
              />
            </View>
            <View
              style={[
                globalStyles.bgExtra3,
                GlobalStyles.rounded,
                GlobalStyles.pv20,
                GlobalStyles.ph15,
                GlobalStyles.mb15,
              ]}>
              <Paragraph
                colorVariant={ColorVariant.EXTRA2}
                semibold
                h5
                title={t('think_positively')}
              />
            </View>
          </View>
          <View style={GlobalStyles.flexCol}>
            <Paragraph
              textWhite
              semibold
              h5
              title={t('goals_chose_from')}
              style={GlobalStyles.mb20}
            />
            <View
              style={[
                globalStyles.bgExtra3,
                GlobalStyles.flexRow,
                GlobalStyles.itemsCenter,
                GlobalStyles.rounded,
                GlobalStyles.pv20,
                GlobalStyles.ph15,
                GlobalStyles.mb15,
                GlobalStyles.justifyBetween,
              ]}>
              <Paragraph
                colorVariant={ColorVariant.EXTRA2}
                semibold
                h5
                title={t('sleep_better')}
              />
              <Image
                source={IMAGES.iconPlus}
                resizeMode="cover"
                style={GlobalStyles.icon18x17}
              />
            </View>
            <View
              style={[
                globalStyles.bgExtra3,
                GlobalStyles.flexRow,
                GlobalStyles.itemsCenter,
                GlobalStyles.rounded,
                GlobalStyles.pv20,
                GlobalStyles.ph15,
                GlobalStyles.mb15,
                GlobalStyles.justifyBetween,
              ]}>
              <Paragraph
                colorVariant={ColorVariant.EXTRA2}
                semibold
                h5
                title={t('no_junk_food')}
              />
              <Image
                source={IMAGES.iconPlus}
                resizeMode="cover"
                style={GlobalStyles.icon18x17}
              />
            </View>
            <View
              style={[
                globalStyles.bgExtra3,
                GlobalStyles.flexRow,
                GlobalStyles.itemsCenter,
                GlobalStyles.rounded,
                GlobalStyles.pv20,
                GlobalStyles.ph15,
                GlobalStyles.mb15,
                GlobalStyles.justifyBetween,
              ]}>
              <Paragraph
                colorVariant={ColorVariant.EXTRA2}
                semibold
                h5
                title={t('get_up_early')}
              />
              <Image
                source={IMAGES.iconPlus}
                resizeMode="cover"
                style={GlobalStyles.icon18x17}
              />
            </View>
            <View
              style={[
                globalStyles.bgExtra3,
                GlobalStyles.flexRow,
                GlobalStyles.itemsCenter,
                GlobalStyles.rounded,
                GlobalStyles.pv20,
                GlobalStyles.ph15,
                GlobalStyles.mb15,
                GlobalStyles.justifyBetween,
              ]}>
              <Paragraph
                colorVariant={ColorVariant.EXTRA2}
                semibold
                h5
                title={t('mediately')}
              />
              <Image
                source={IMAGES.iconPlus}
                resizeMode="cover"
                style={GlobalStyles.icon18x17}
              />
            </View>
            <View
              style={[
                globalStyles.bgExtra3,
                GlobalStyles.flexRow,
                GlobalStyles.itemsCenter,
                GlobalStyles.rounded,
                GlobalStyles.pv20,
                GlobalStyles.ph15,
                GlobalStyles.mb15,
                GlobalStyles.justifyBetween,
              ]}>
              <Paragraph
                colorVariant={ColorVariant.EXTRA2}
                semibold
                h5
                title={t('mediately')}
              />
              <Image
                source={IMAGES.iconPlus}
                resizeMode="cover"
                style={GlobalStyles.icon18x17}
              />
            </View>
            <Button
              colorVariant={ColorVariant.EXTRA2}
              semibold
              h5
              title={t('create_your_personal')}
              isIconRight={
                <Image
                  source={IMAGES.iconPlus}
                  resizeMode="cover"
                  style={[GlobalStyles.ml5, GlobalStyles.icon18x17]}
                />
              }
              containerStyle={{
                ...GlobalStyles.rounded,
                ...globalStyles.bgExtra1,
                ...GlobalStyles.flexRow,
                ...GlobalStyles.itemsCenter,
                ...GlobalStyles.justifyCenter,
                ...GlobalStyles.pv20,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default GoalsScreen;
