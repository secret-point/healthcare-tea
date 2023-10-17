import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView } from 'react-native';

import { GlobalStyles } from '~Root/config';
import { Header } from '~Root/components';
import { useAppTheme } from '~Root/services/theme/hook';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import Lock from '~Root/assets/icons/lock.svg';
import Bell from '~Root/assets/icons/bell.svg';
import Theme from '~Root/assets/icons/theme.svg';
import Sound from '~Root/assets/icons/sound.svg';
import User from '~Root/assets/icons/user.svg';
import { goBack, navigate } from '~Root/navigation';
import {
  SectionWrap,
  SectionItem,
} from '~Root/screens/Profile/partial/Section';
import { AppRoute } from '~Root/navigation/AppRoute';

const ProfileSettingsScreen = () => {
  const { t } = useTranslation();
  const { theme } = useAppTheme();

  const goTo = (routeName: string) => () => {
    navigate(routeName);
  };

  return (
    <SafeAreaLayout edges={['bottom']}>
      <Header
        onBackPress={goBack}
        isBack={true}
        title={t('settings')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={GlobalStyles.ph15}
        style={GlobalStyles.mb20}>
        <SectionWrap>
          <SectionItem
            color={theme.contrastColor}
            title={t('password_change')}
            IconComponent={Lock}
          />
          <SectionItem
            color={theme.contrastColor}
            title={t('notifications')}
            IconComponent={Bell}
          />
          <SectionItem
            color={theme.contrastColor}
            title={t('themes')}
            IconComponent={Theme}
            onPress={goTo(AppRoute.PROFILE_THEME)}
          />
          <SectionItem
            color={theme.contrastColor}
            title={t('sound')}
            IconComponent={Sound}
          />
          <SectionItem
            color={theme.contrastColor}
            title={t('avatar')}
            IconComponent={User}
          />
        </SectionWrap>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default ProfileSettingsScreen;
