import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { GlobalStyles } from '~Root/config/styles';
import { Header, Link, Paragraph } from '~Root/components';
import { ColorVariant } from '~Root/components/Paragraph';
import { useAppTheme } from '~Root/services/theme/hook';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { AppRoute } from '~Root/navigation/AppRoute';

const MySafeSpaceScreen = ({ navigation }: any) => {
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
        title={t('my_safe_space') ?? ''}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={GlobalStyles.ph15}>
          <View style={GlobalStyles.flexCol}>
            <View
              style={[
                GlobalStyles.flexRow,
                GlobalStyles.itemsCenter,
                GlobalStyles.justifyBetween,
                GlobalStyles.mb20,
              ]}>
              <TouchableOpacity>
                <Paragraph textWhite semibold h5 title={t('my_tools')} />
              </TouchableOpacity>
              <Link
                colorVariant={ColorVariant.LINK}
                medium
                p
                title={t('see_all')}
                onPress={() => navigation.navigate(AppRoute.APPRECIATED_TOOLS)}
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
                title="Daily Meditation for positive energy"
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
                title="Healthy sleep habits"
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
                title="Healthy diet"
              />
            </View>
          </View>
          <View style={GlobalStyles.flexCol}>
            <View
              style={[
                GlobalStyles.flexRow,
                GlobalStyles.itemsCenter,
                GlobalStyles.justifyBetween,
                GlobalStyles.mb20,
              ]}>
              <TouchableOpacity>
                <Paragraph
                  textWhite
                  semibold
                  h5
                  title={t('appreciated_content')}
                />
              </TouchableOpacity>
              <Link
                colorVariant={ColorVariant.LINK}
                medium
                p
                onPress={() =>
                  navigation.navigate(AppRoute.APPRECIATED_CONTENT)
                }
                title={t('see_all')}
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
                title="Understanding anxiety disorder"
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
                title="What to say instead of “NO!”"
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
                title="Healthy habits for life"
              />
            </View>
          </View>
          <View style={GlobalStyles.flexCol}>
            <View
              style={[
                GlobalStyles.flexRow,
                GlobalStyles.itemsCenter,
                GlobalStyles.justifyBetween,
                GlobalStyles.mb20,
              ]}>
              <TouchableOpacity>
                <Paragraph textWhite semibold h5 title={t('daily_quotes')} />
              </TouchableOpacity>
              <Link
                colorVariant={ColorVariant.LINK}
                medium
                p
                title={t('see_all')}
                onPress={() => navigation.navigate(AppRoute.DAILY_QUOTES)}
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
                numberOfLines={1}
                ellipsizeMode="tail"
                colorVariant={ColorVariant.EXTRA2}
                semibold
                h5
                title="At vero eos et accusamus et iusto odio dign"
                style={GlobalStyles.mb5}
              />
              <Paragraph
                colorVariant={ColorVariant.EXTRA2}
                regular
                p
                title="14:35"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default MySafeSpaceScreen;
