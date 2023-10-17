import { FlatList, ScrollView, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { GlobalStyles } from '~Root/config/styles';
import {
  BorderPrimaryButton,
  ColorVariant,
  Image,
  ImageFeature,
  LayoutButton,
  MainHeader,
  Paragraph,
  PrimaryToolBox,
  SectionHeading,
} from '~Root/components';
import { IMAGES } from '~Root/config';
import createStyles from './styles';
import {
  MOCK_SUPPORT_GROUPS,
  MOCK_SUPPORT_GROUPS_LIST_IMAGE,
} from '~Root/utils';
import { useAppTheme } from '~Root/services/theme/hook';
import { AppRoute } from '~Root/navigation/AppRoute';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import TherapistUpcomingEvent from '~Root/screens/Home/partial/TherapistUpcomingEvent';
import { navigate } from '~Root/navigation';
import HomeDailyQuote from '~Root/screens/Home/partial/DailyQuote';
import { useAuth } from '~Root/services/auth/hook';
import { RoleId } from '~Root/services/auth/types';

const HomeScreen = () => {
  const { t } = useTranslation();
  const { theme, globalStyles } = useAppTheme(true);
  const styles = createStyles(theme);
  const { auth } = useAuth();

  const goCalendar = () => {
    navigate(AppRoute.CALENDAR_NAVIGATOR, {
      screen: AppRoute.CALENDAR,
      initial: false,
    });
  };

  const onBookingAppointment = () => {
    navigate(AppRoute.CALENDAR_NAVIGATOR, {
      screen: AppRoute.CALENDAR_APPOINTMENT,
      initial: false,
    });
  };

  const onBookTherapist = () => {
    navigate(AppRoute.BOOK_THERAPIST_NAVIGATOR, {
      screen: AppRoute.BOOK_THERAPIST,
      initial: false,
    });
  };

  const renderListFooter = () => (
    <View
      style={[
        GlobalStyles.icon32x32,
        GlobalStyles.rounded64,
        GlobalStyles.itemsCenter,
        GlobalStyles.justifyCenter,
        styles.circle,
      ]}>
      <Paragraph colorVariant={ColorVariant.EXTRA1} medium h6 title="+32" />
    </View>
  );

  return (
    <SafeAreaLayout>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={[GlobalStyles.ph15, GlobalStyles.mb20]}>
          <MainHeader />
          <HomeDailyQuote />

          <SectionHeading
            title={t('upcoming_events')}
            linkText={t('see_all')}
            onPressLink={goCalendar}
          />
          {auth.roleId === RoleId.THERAPIST ? (
            <TherapistUpcomingEvent
              onCalendar={goCalendar}
              onBookingAppointment={onBookingAppointment}
            />
          ) : (
            <>
              <PrimaryToolBox
                title="Would you like to book an appointment?"
                description="Find suitable therapists here"
                onNextPress={onBookTherapist}
                containerStyle={GlobalStyles.mb15}
              />
              {/* <SectionHeading
                title={t('support_groups')}
                linkText={t('see_all')}
              />
              <View
                style={[
                  globalStyles.bgExtra2,
                  GlobalStyles.rounded,
                  GlobalStyles.p5,
                  GlobalStyles.mb20,
                  GlobalStyles.flexRow,
                  GlobalStyles.container,
                ]}>
                <View style={[GlobalStyles.flexCol, GlobalStyles.mr5]}>
                  <ImageFeature uri={MOCK_SUPPORT_GROUPS} />
                </View>
                <View style={[GlobalStyles.flexCol, GlobalStyles.container]}>
                  <Paragraph
                    colorVariant={ColorVariant.FRAME}
                    h5
                    bold
                    title="New Mothers"
                    style={GlobalStyles.mb3}
                  />
                  <Paragraph
                    colorVariant={ColorVariant.FRAME}
                    medium
                    style={[
                      GlobalStyles.font8,
                      GlobalStyles.lineHeight12,
                      GlobalStyles.mb10,
                    ]}
                    title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, rutrum tellus, lorem velit, commodo pellentesque."
                  />
                  <View
                    style={[GlobalStyles.flexRow, GlobalStyles.itemsCenter]}>
                    <FlatList
                      horizontal
                      data={MOCK_SUPPORT_GROUPS_LIST_IMAGE}
                      contentContainerStyle={GlobalStyles.ml15}
                      renderItem={({ item }) => (
                        <View
                          style={[
                            GlobalStyles.icon32x32,
                            GlobalStyles.rounded64,
                            styles.imageList,
                          ]}>
                          <Image
                            source={{ uri: item }}
                            resizeMode="contain"
                            style={styles.img}
                          />
                        </View>
                      )}
                      ListFooterComponent={renderListFooter}
                      keyExtractor={(item, index) => `${index.toString()}`}
                      showsVerticalScrollIndicator={false}
                      showsHorizontalScrollIndicator={false}
                    />
                    <BorderPrimaryButton small title={t('join')} />
                  </View>
                </View>
              </View> */}

              <LayoutButton
                bold
                title={t('update_to_premium')}
                containerStyle={styles.btnPremium}
                isIconLeft={
                  <Image
                    source={IMAGES.iconPremium}
                    resizeMode="cover"
                    style={[GlobalStyles.icon22x16, GlobalStyles.mr10]}
                  />
                }
              />
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default HomeScreen;
