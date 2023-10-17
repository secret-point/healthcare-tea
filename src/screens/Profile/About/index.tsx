import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';

import { GlobalStyles } from '~Root/config';
import { Header } from '~Root/components';
import { useAppTheme } from '~Root/services/theme/hook';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { goBack, navigate } from '~Root/navigation';
import {
  SectionWrap,
  SectionItem,
} from '~Root/screens/Profile/partial/Section';
import { AppRoute } from '~Root/navigation/AppRoute';
import { IPageLinkItem } from '~Root/config/types';

const ABOUT_PAGES_LIST: IPageLinkItem[] = [
  { queryKey: 'terms', name: 'term_&_conditions' },
  { queryKey: 'privacy', name: 'privacy_&_data_collection' },
  { queryKey: 'rules', name: 'rule_&_regulations' },
  { queryKey: 'patient-consent', name: 'patient/clinical_consent' },
];

const ProfileAboutScreen = () => {
  const { t } = useTranslation();
  const { theme } = useAppTheme();

  const onNavigate = ({ name, queryKey }: IPageLinkItem) => {
    navigate(AppRoute.PROFILE_ABOUT_CONTENT, { name, queryKey });
  };

  return (
    <SafeAreaLayout edges={['bottom']}>
      <Header
        onBackPress={goBack}
        isBack={true}
        title={t('about')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={GlobalStyles.ph15}
        style={GlobalStyles.mb20}>
        <SectionWrap>
          {ABOUT_PAGES_LIST.map(item => (
            <SectionItem
              key={item.name}
              color={theme.contrastColor}
              title={t(item.name)}
              onPress={() => onNavigate(item)}
            />
          ))}
        </SectionWrap>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default ProfileAboutScreen;
