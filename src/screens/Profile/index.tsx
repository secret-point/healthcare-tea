import React from 'react';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';

import styles from './styles';
import { GlobalStyles, IMAGES } from '~Root/config';
import {
  Header,
  Image,
  Paragraph,
  LayoutButton,
  ColorVariant,
} from '~Root/components';
import { useAppTheme } from '~Root/services/theme/hook';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import FastImage from '~Root/components/FastImage';
import { useAuth } from '~Root/services/auth/hook';
import User from '~Root/assets/icons/user.svg';
import Gear from '~Root/assets/icons/gear.svg';
import CustomerSupport from '~Root/assets/icons/customer-support.svg';
import Info from '~Root/assets/icons/info.svg';
import Logout from '~Root/assets/icons/logout.svg';
import { goBack, navigate } from '~Root/navigation';
import { AppRoute } from '~Root/navigation/AppRoute';
import {
  SectionWrap,
  SectionItem,
} from '~Root/screens/Profile/partial/Section';

const ProfileScreen = () => {
  const { t } = useTranslation();
  const { theme } = useAppTheme();

  const { auth, logout } = useAuth();

  const goToAccountInfo = () => {
    navigate(AppRoute.PROFILE_INFO);
  };

  const goToSettings = () => {
    navigate(AppRoute.PROFILE_SETTINGS);
  };

  const goToAbout = () => {
    navigate(AppRoute.PROFILE_ABOUT);
  };

  return (
    <SafeAreaLayout edges={['bottom']}>
      <Header
        onBackPress={goBack}
        isBack={true}
        title={t('account')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={GlobalStyles.ph15}
        style={GlobalStyles.mb20}>
        <View style={styles.avatarContainer}>
          <FastImage
            source={{ uri: auth.avatar }}
            resizeMode={FastImage.resizeMode.cover}
            style={styles.avatar}
          />
          <Paragraph
            p
            semibold
            colorVariant={ColorVariant.CONTRAST}
            textCenter
            numberOfLines={2}
            title={auth.fullName}
          />
        </View>
        <SectionWrap>
          <SectionItem
            color={theme.contrastColor}
            title={t('account_info')}
            IconComponent={User}
            onPress={goToAccountInfo}
          />
          <SectionItem
            color={theme.contrastColor}
            title={t('settings')}
            IconComponent={Gear}
            onPress={goToSettings}
          />
          <SectionItem
            color={theme.contrastColor}
            title={t('customer_support')}
            IconComponent={CustomerSupport}
          />
          <SectionItem
            color={theme.contrastColor}
            title={t('about')}
            IconComponent={Info}
            onPress={goToAbout}
          />
          <SectionItem
            color={theme.contrastColor}
            title={t('log_out')}
            IconComponent={Logout}
            onPress={logout}
          />
        </SectionWrap>
        <LayoutButton
          bold
          title="Upgrade to Premium"
          containerStyle={styles.btnPremium}
          isIconLeft={
            <Image
              source={IMAGES.iconPremium}
              resizeMode="cover"
              style={[GlobalStyles.icon22x16, GlobalStyles.mr10]}
            />
          }
        />
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default ProfileScreen;
