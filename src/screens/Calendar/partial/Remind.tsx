import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useTranslation } from 'react-i18next';
import Bell from '~Root/assets/icons/bell.svg';

import { GlobalStyles } from '~Root/config/styles';
import { NoteToolBox, SwitchButton } from '~Root/components';
import Paragraph, { ColorVariant } from '../../../components/Paragraph';
import FastImage from '~Root/components/FastImage';
import { IMAGES } from '~Root/config';
import { useAppTheme } from '~Root/services/theme/hook';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
};

const CalendarRemind = ({ containerStyle }: Props) => {
  const { t } = useTranslation();
  const { theme } = useAppTheme();

  return (
    <View style={[GlobalStyles.flexCol, containerStyle]}>
      <Paragraph
        regular
        colorVariant={ColorVariant.EXTRA2}
        p
        title={t('reminder')}
        style={GlobalStyles.mb5}
      />
      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.itemsCenter,
          GlobalStyles.justifyBetween,
          GlobalStyles.container,
          GlobalStyles.mb10,
        ]}>
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.itemsCenter,
            GlobalStyles.gap10,
          ]}>
          <Bell primaryColor={theme.contrastColor} width={24} />
          <Paragraph
            h5
            semibold
            colorVariant={ColorVariant.CONTRAST}
            title={t('add_reminded').toUpperCase()}
          />
        </View>
        <SwitchButton />
      </View>

      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.itemsCenter,
          GlobalStyles.justifyBetween,
          GlobalStyles.container,
          GlobalStyles.mb10,
        ]}>
        <Paragraph
          h5
          medium
          colorVariant={ColorVariant.EXTRA2}
          title={t('time_before', { time: t('minutes', { time: 15 }) })}
        />
        <Icon name="close-outline" size={35} color={theme.contrastColor} />
      </View>

      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.itemsCenter,
          GlobalStyles.justifyBetween,
          GlobalStyles.container,
          GlobalStyles.gap10,
        ]}>
        <Paragraph
          p
          medium
          colorVariant={ColorVariant.EXTRA2}
          title={t('remind_at_specific_time')}
          style={GlobalStyles.container}
        />
        <NoteToolBox>
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
              title="9:00 AM"
            />
          </View>
        </NoteToolBox>
      </View>
    </View>
  );
};

export default CalendarRemind;
