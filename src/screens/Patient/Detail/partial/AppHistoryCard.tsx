import React, { memo } from 'react';
import { View, ViewStyle } from 'react-native';

import { GlobalStyles } from '~Root/config/styles';
import { Paragraph, TitleToolBox } from '~Root/components';
import styles from './styles';
import FastImage from '~Root/components/FastImage';
import { ColorVariant } from '~Root/components/Paragraph';

type Props = {
  containerStyle?: ViewStyle;
  title: string;
  image?: string;
};

const PatientDetailAppHistoryCard = memo(
  ({ containerStyle, title, image }: Props) => {
    return (
      <TitleToolBox
        containerStyle={[
          GlobalStyles.pv10,
          GlobalStyles.ph15,
          GlobalStyles.container,
          containerStyle,
        ]}>
        <View
          style={[
            GlobalStyles.container,
            GlobalStyles.flexRow,
            GlobalStyles.itemsCenter,
          ]}>
          <FastImage
            style={styles.historyImage}
            source={{
              uri: image,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <Paragraph
            medium
            p
            colorVariant={ColorVariant.CONTRAST}
            title={title}
            style={GlobalStyles.flexShrink1}
          />
        </View>
      </TitleToolBox>
    );
  },
);

export default PatientDetailAppHistoryCard;
