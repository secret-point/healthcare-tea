import { ScrollView, FlatList, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  ShopHeader,
  CardImageProduct,
  Tag,
  SectionHeading,
  Paragraph,
} from '~Root/components';
import { GlobalStyles } from '~Root/config/styles';
import { AppRoute } from '~Root/navigation/AppRoute';
import { ShopNavigatorParamsList } from '~Root/navigation/config';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import CouponSuggestion from '~Root/screens/Shop/partial/CouponSuggestion';
import { MOCK_DATA_SHOP_RECOMMENDED } from '~Root/utils';
import styles from '~Root/screens/Shop/styles';
type Props = NativeStackScreenProps<ShopNavigatorParamsList, AppRoute.SHOP>;
const ShopScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();

  const onBack = () => {
    navigation.goBack();
  };
  const onFilterClick = () => {};
  const onRecommendedClick = () => {};
  return (
    <SafeAreaLayout>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <ShopHeader
          onBackPress={onBack}
          isBack={false}
          containerHeaderStyle={GlobalStyles.bgTransparent}
        />
        <View style={[GlobalStyles.ph10, GlobalStyles.pt10]}>
          <Paragraph
            textCenter
            textWhite
            bold
            h2
            title={t('online_shop')}
            style={[GlobalStyles.mb5, styles.heading]}
          />
          <Paragraph
            textCenter
            textWhite
            bold
            h5
            title={t('online_shop_description')}
          />
        </View>
        <View style={[GlobalStyles.ph15, GlobalStyles.pt20]}>
          <CouponSuggestion />
        </View>
        <View style={[GlobalStyles.ph15]}>
          <SectionHeading
            title={t('filters')}
            linkText={t('see_all')}
            onPressTitle={onFilterClick}
            onPressLink={onFilterClick}
            containerStyles={[GlobalStyles.mb15]}
          />
        </View>
        <View style={[GlobalStyles.mb10, GlobalStyles.ml15]}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            directionalLockEnabled={true}
            alwaysBounceVertical={false}>
            <FlatList
              style={GlobalStyles.mb15}
              columnWrapperStyle={GlobalStyles.gap10}
              contentContainerStyle={[
                GlobalStyles.gap10,
                GlobalStyles.selfStart,
              ]}
              numColumns={6}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              directionalLockEnabled={true}
              alwaysBounceVertical={false}
              data={[
                { name: 'Meditations', value: 'Meditations' },
                { name: 'Mindfulness', value: 'Mindfulness' },
                { name: 'Burnout', value: 'Burnout' },
                { name: 'Parenting', value: 'Parenting' },
                { name: 'Relationships', value: 'Relationships' },
                { name: 'Eating disorders', value: 'Eating disorders' },
              ]}
              keyExtractor={(item, index) => `${index.toString()}`}
              renderItem={({ item }) => <Tag label={item.name} />}
            />
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            directionalLockEnabled={true}
            alwaysBounceVertical={false}>
            <FlatList
              style={GlobalStyles.mb15}
              columnWrapperStyle={GlobalStyles.gap10}
              contentContainerStyle={[
                GlobalStyles.gap10,
                GlobalStyles.selfStart,
              ]}
              numColumns={6}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              directionalLockEnabled={true}
              alwaysBounceVertical={false}
              data={[
                { name: 'Stress management', value: 'Stress management' },
                { name: 'Goal setting', value: 'Goal setting' },
                { name: 'Anxiety Management', value: 'Anxiety Management' },
                { name: 'Healthy Habits', value: 'Healthy Habits' },
              ]}
              keyExtractor={(item, index) => `${index.toString()}`}
              renderItem={({ item }) => <Tag label={item.name} />}
            />
          </ScrollView>
        </View>
        <View style={[GlobalStyles.ph15]}>
          <SectionHeading
            title={t('recommended_for_you')}
            linkText={t('see_all')}
            onPressTitle={onRecommendedClick}
            onPressLink={onRecommendedClick}
            containerStyles={[GlobalStyles.mb15]}
          />
        </View>
        <View
          style={[GlobalStyles.flexCol, GlobalStyles.ml15, GlobalStyles.mb20]}>
          <View>
            <FlatList
              horizontal
              data={MOCK_DATA_SHOP_RECOMMENDED}
              renderItem={({ item }) => (
                <CardImageProduct
                  {...item}
                  styleContainer={GlobalStyles.mr15}
                />
              )}
              keyExtractor={(item, index) => `recommended-${index.toString()}`}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={[GlobalStyles.ph15]}>
          <SectionHeading
            title={t('books')}
            linkText={t('see_all')}
            onPressTitle={onRecommendedClick}
            onPressLink={onRecommendedClick}
            containerStyles={[GlobalStyles.mb15]}
          />
        </View>
        <View
          style={[GlobalStyles.flexCol, GlobalStyles.ml15, GlobalStyles.mb20]}>
          <View>
            <FlatList
              horizontal
              data={MOCK_DATA_SHOP_RECOMMENDED}
              renderItem={({ item }) => (
                <CardImageProduct
                  {...item}
                  styleContainer={GlobalStyles.mr15}
                />
              )}
              keyExtractor={(item, index) => `books-${index.toString()}`}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={[GlobalStyles.ph15]}>
          <SectionHeading
            title={t('courses')}
            linkText={t('see_all')}
            onPressTitle={onRecommendedClick}
            onPressLink={onRecommendedClick}
            containerStyles={[GlobalStyles.mb15]}
          />
        </View>
        <View
          style={[GlobalStyles.flexCol, GlobalStyles.ml15, GlobalStyles.mb20]}>
          <View>
            <FlatList
              horizontal
              data={MOCK_DATA_SHOP_RECOMMENDED}
              renderItem={({ item }) => (
                <CardImageProduct
                  {...item}
                  styleContainer={GlobalStyles.mr15}
                />
              )}
              keyExtractor={(item, index) => `courses-${index.toString()}`}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View style={[GlobalStyles.ph15]}>
          <SectionHeading
            title={t('products')}
            linkText={t('see_all')}
            onPressTitle={onRecommendedClick}
            onPressLink={onRecommendedClick}
            containerStyles={[GlobalStyles.mb15]}
          />
        </View>
        <View
          style={[GlobalStyles.flexCol, GlobalStyles.ml15, GlobalStyles.mb20]}>
          <View>
            <FlatList
              horizontal
              data={MOCK_DATA_SHOP_RECOMMENDED}
              renderItem={({ item }) => (
                <CardImageProduct
                  {...item}
                  styleContainer={GlobalStyles.mr15}
                />
              )}
              keyExtractor={(item, index) => `products-${index.toString()}`}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default ShopScreen;
