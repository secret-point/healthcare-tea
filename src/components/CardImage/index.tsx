import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';

import { GlobalStyles } from '~Root/config';
import { Paragraph } from '~Root/components';
import styles from './styles';
import { useAppTheme } from '~Root/services/theme/hook';
import FastImage from '~Root/components/FastImage';

type SIZE = 'medium' | 'small';

interface Props {
  title: string;
  subTitle?: string | null;
  uri?: string;
  size?: SIZE;
  styleContainer?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const CardImage: React.FC<Props> = ({
  title = '',
  subTitle,
  uri,
  size = 'medium',
  styleContainer = {},
  onPress = () => {},
}) => {
  const { globalStyles } = useAppTheme(true);
  let cardSize = styles.cardMedium;
  let titleContainer = styles.titleContainerMedium;

  if (size === 'small') {
    cardSize = styles.cardSmall;
    titleContainer = styles.titleContainerSmall;
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        GlobalStyles.flexCol,
        GlobalStyles.rounded,
        GlobalStyles.overflowHidden,
        cardSize,
        styleContainer,
      ]}>
      <FastImage
        source={{ uri }}
        resizeMode={FastImage.resizeMode.cover}
        style={styles.image}
      />
      <View style={[styles.bgCard, globalStyles.bgExtra3]} />
      <View style={[styles.titleContainer, titleContainer]}>
        <Paragraph
          semibold
          textWhite
          title={title}
          style={[GlobalStyles.lineHeight9, GlobalStyles.font7]}
        />
        <Paragraph
          regular
          textWhite
          title={subTitle ?? ''}
          style={[GlobalStyles.lineHeight9, GlobalStyles.font7]}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardImage;
