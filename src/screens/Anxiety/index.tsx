import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { GlobalStyles } from '~Root/config/styles';
import { Header, Paragraph, Tag } from '~Root/components';
import { AppRoute } from '~Root/navigation/AppRoute';
import { MainNavigatorParamsList } from '~Root/navigation/config';
import styles from './styles';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';

type Props = NativeStackScreenProps<MainNavigatorParamsList, AppRoute.ANXIETY>;

interface ICategories {
  id: number;
  name: string;
}

const MOCK_CATEGORIES: ICategories[] = [
  { id: 1, name: 'Acceptance' },
  { id: 2, name: 'Anger' },
  { id: 3, name: 'Depression' },
  { id: 4, name: 'Inner peace' },
  { id: 5, name: 'Empathy gap' },
  { id: 6, name: 'Fear' },
  { id: 7, name: 'Anxiety' },
  { id: 8, name: 'Motivation' },
];

const AnxietyScreen = ({ navigation }: Props) => {
  const { t } = useTranslation();

  const onBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={onBack}
        isBack={true}
        title={t('what_would_you_like_to_work_on')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
        titleStyle={styles.titleStyle}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={GlobalStyles.ph15}>
          <View style={GlobalStyles.mb10}>
            <Paragraph
              textWhite
              semibold
              h3
              textCenter
              title="Anxiety"
              style={GlobalStyles.mb10}
            />
            <Paragraph
              textWhite
              regular
              h5
              style={GlobalStyles.lineHeight20}
              title="Duis congue est nunc, id efficitur metus scelerisque eget. Suspendisse consectetur magna ut hendrerit sagittis. Nunc eget dictum tellus. Vivamus lobortis nulla nec lectus blandit, vel molestie mauris vestibulum. Praesent sit amet felis auctor, semper nisi ultrices, consequat libero. nibh lorem ac leo. Phasellus sagittis tristique laoreet. Nulla facilisi. Praesent venenatis, mi eu sollicitudin auctor, odio urna maximus nulla, in pharetra nisi nisi sit amet justo. Quisque scelerisque in est at ultrices. Proin sem libero, porta eu vestibulum quis, dignissim sed ex. Vivamus velit risus, ullamcorper at dui ac, eleifend lacinia tellus. Praesent facilisis neque quis eros feugiat volutpat. Suspendisse vitae faucibus odio. Nulla facilisi."
            />
          </View>
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
              numColumns={Math.ceil(MOCK_CATEGORIES.length / 2)}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              directionalLockEnabled={true}
              alwaysBounceVertical={false}
              data={MOCK_CATEGORIES}
              keyExtractor={(item, index) => `${index.toString()}`}
              renderItem={({ item }) => <Tag label={item.name} />}
            />
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default AnxietyScreen;
