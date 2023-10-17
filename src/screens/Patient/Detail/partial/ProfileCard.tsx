import React, { memo, ReactElement } from 'react';
import { View, ViewStyle } from 'react-native';

import { GlobalStyles } from '~Root/config/styles';
import { Extra6View, Paragraph } from '~Root/components';
import FastImage from '~Root/components/FastImage';
import styles from './styles';
import { ColorVariant } from '~Root/components/Paragraph';
import { useTranslation } from 'react-i18next';
import Badge from '~Root/components/Badge';

type Props = {
  containerStyle?: ViewStyle;
  children?: ReactElement;
};

const PatientDetailProfileCard = memo(({ containerStyle }: Props) => {
  const { t } = useTranslation();
  return (
    <Extra6View
      style={[
        GlobalStyles.rounded,
        GlobalStyles.pv10,
        GlobalStyles.ph8,
        GlobalStyles.container,
        containerStyle,
      ]}>
      <View style={GlobalStyles.flexRow}>
        <FastImage
          style={[styles.profileImage, GlobalStyles.mr15]}
          resizeMode={FastImage.resizeMode.cover}
        />
        <View style={GlobalStyles.flexShrink1}>
          <Paragraph
            h5
            bold
            colorVariant={ColorVariant.EXTRA4}
            title="Samanta Grey"
          />
          <Paragraph
            h5
            regular
            colorVariant={ColorVariant.EXTRA4}
            title="! She needs 2 sessions per week."
          />
        </View>
      </View>
      <Paragraph
        p
        regular
        colorVariant={ColorVariant.EXTRA4}
        title={t('age_yo', { age: 23 })}
      />
      <View style={[GlobalStyles.flexRow, GlobalStyles.itemsCenter]}>
        <Paragraph
          p
          regular
          colorVariant={ColorVariant.EXTRA4}
          title={t('sessions', { number: '' })}
          style={GlobalStyles.mr8}
        />
        <Badge label={4} />
      </View>
    </Extra6View>
  );
});

export default PatientDetailProfileCard;
