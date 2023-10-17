import React from 'react';
import { ScrollView, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { GlobalStyles } from '~Root/config/styles';
import {
  Header,
  UserToolBox,
  AlertToolBox,
  NoteToolBox,
  Link,
} from '~Root/components';
import SafeAreaLayout from '~Root/components/Layout/SafeAreaLayout';
import { goBack, navigate } from '~Root/navigation';
import Paragraph, { ColorVariant } from '../../../components/Paragraph';
import FastImage from '~Root/components/FastImage';
import { IMAGES } from '~Root/config';
import { BorderPrimaryButton, PrimaryButton } from '~Root/components/Button';
import styles from './styles';
import CalendarRemind from '~Root/screens/Calendar/partial/Remind';
import { AppRoute } from '~Root/navigation/AppRoute';

const CalendarEventScreen = () => {
  const { t } = useTranslation();

  const onPressUser = () => {
    navigate(AppRoute.THERAPIST_DETAIL);
  };

  return (
    <SafeAreaLayout>
      <Header
        onBackPress={goBack}
        isBack={true}
        title={t('event')}
        containerHeaderStyle={GlobalStyles.bgTransparent}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[GlobalStyles.ph15, GlobalStyles.pb15]}>
        <NoteToolBox
          label={t('event')}
          note="Webinar on Cyber-bullying: Trends, prevention strategies and the role of law enforcement"
          containerStyle={GlobalStyles.mb10}
        />
        <UserToolBox
          label={t('speaker')}
          name="Dr. Aaron Adams"
          major="Psychologist"
          containerStyle={GlobalStyles.mb10}
          onPressUser={onPressUser}
        />
        <NoteToolBox
          label={t('type_of_event')}
          containerStyle={GlobalStyles.mb10}>
          <View
            style={[
              GlobalStyles.flexRow,
              GlobalStyles.itemsCenter,
              GlobalStyles.gap10,
            ]}>
            <FastImage
              source={IMAGES.iconMovieCamera}
              resizeMode={FastImage.resizeMode.cover}
              style={GlobalStyles.icon14x14}
            />
            <Paragraph
              p
              medium
              colorVariant={ColorVariant.EXTRA4}
              title="Video call"
            />
          </View>
        </NoteToolBox>

        <NoteToolBox
          label={t('date_of_event')}
          containerStyle={GlobalStyles.mb10}>
          <View
            style={[
              GlobalStyles.flexRow,
              GlobalStyles.itemsCenter,
              GlobalStyles.gap10,
            ]}>
            <FastImage
              source={IMAGES.calendar}
              resizeMode={FastImage.resizeMode.cover}
              style={GlobalStyles.icon14x14}
            />
            <Paragraph
              p
              medium
              colorVariant={ColorVariant.EXTRA4}
              title="14.10.2021"
            />
          </View>
        </NoteToolBox>

        <NoteToolBox
          label={t('link_of_event')}
          containerStyle={[GlobalStyles.mb10]}>
          <View
            style={[
              GlobalStyles.flexRow,
              GlobalStyles.itemsCenter,
              GlobalStyles.gap10,
            ]}>
            <FastImage
              source={IMAGES.link}
              resizeMode={FastImage.resizeMode.cover}
              style={GlobalStyles.icon14x14}
            />
            <Link
              p
              medium
              colorVariant={ColorVariant.EXTRA4}
              title="www.eventlink.com"
              style={styles.linkText}
            />
          </View>
        </NoteToolBox>

        <View style={[GlobalStyles.flexRow, GlobalStyles.mb10]}>
          <NoteToolBox label={t('time_of_event')}>
            <View
              style={[
                GlobalStyles.flexRow,
                GlobalStyles.itemsCenter,
                GlobalStyles.gap10,
              ]}>
              <FastImage
                source={IMAGES.clock}
                resizeMode={FastImage.resizeMode.cover}
                style={GlobalStyles.icon14x14}
              />
              <Paragraph
                p
                medium
                colorVariant={ColorVariant.EXTRA4}
                title="10:00 - 11:00 AM"
              />
            </View>
          </NoteToolBox>
          <View style={GlobalStyles.container} />
        </View>
        <CalendarRemind containerStyle={GlobalStyles.mb15} />
        <AlertToolBox
          text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa."
          containerStyle={GlobalStyles.mb20}
        />
        <View style={[GlobalStyles.flexRow, GlobalStyles.justifyBetween]}>
          <BorderPrimaryButton
            title={t('cancel')}
            onPress={goBack}
            containerStyle={styles.buttonStyle}
          />
          <PrimaryButton
            title={t('join')}
            containerStyle={styles.buttonStyle}
          />
        </View>
      </ScrollView>
    </SafeAreaLayout>
  );
};

export default CalendarEventScreen;
