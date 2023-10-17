import { TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';

import { GlobalStyles, IMAGES } from '~Root/config';
import { Paragraph } from '~Root/components';
import styles from './styles';
import { useAppTheme } from '~Root/services/theme/hook';
import FastImage from '~Root/components/FastImage';
import { MOCK_CONTENT_IMAGE_URL } from '~Root/utils';

interface Props {
  title: string;
  tag?: string;
  image?: string;
  minute?: number;
  styleContainer?: ViewStyle;
  onPressItem?: () => void;
}

const CardImageExploration: React.FC<Props> = ({
  title = '',
  tag = 'Article',
  image = MOCK_CONTENT_IMAGE_URL,
  minute = 21,
  styleContainer,
  onPressItem,
}) => {
  const { globalStyles } = useAppTheme(true);
  let cardSize = styles.cardMedium;
  let titleContainer = styles.titleContainerMedium;

  return (
    <TouchableOpacity
      style={[
        GlobalStyles.flexCol,
        GlobalStyles.rounded,
        GlobalStyles.overflowHidden,
        cardSize,
        styleContainer,
      ]}
      onPress={onPressItem}>
      <FastImage
        source={{ uri: image }}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.image}
      />
      <View style={[styles.bgCard, globalStyles.bgExtra3]} />
      <View
        style={[
          GlobalStyles.container,
          GlobalStyles.justifyBetween,
          GlobalStyles.pb15,
          styles.titleContainer,
          titleContainer,
        ]}>
        <View style={GlobalStyles.container}>
          <Paragraph semibold textWhite p title={title} />
        </View>
        <View style={GlobalStyles.flexCol}>
          {minute > 0 && (
            <View
              style={[
                GlobalStyles.flexRow,
                GlobalStyles.itemsCenter,
                GlobalStyles.mb5,
              ]}>
              <FastImage
                source={IMAGES.iconClock}
                resizeMode={FastImage.resizeMode.cover}
                style={[GlobalStyles.icon12x12, GlobalStyles.mr5]}
              />
              <Paragraph
                regular
                textWhite
                title={`${minute} min`}
                style={[GlobalStyles.font8]}
              />
            </View>
          )}
          {tag && (
            <View
              style={[
                GlobalStyles.pv3,
                GlobalStyles.ph5,
                GlobalStyles.selfStart,
                styles.tag,
              ]}>
              <Paragraph
                regular
                textWhite
                title={tag}
                style={[GlobalStyles.lineHeight9, GlobalStyles.font7]}
              />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardImageExploration;
