import { View, ViewStyle } from 'react-native';
import React from 'react';

import { GlobalStyles } from '~Root/config';
import { Image } from '~Root/components';
import styles from './styles';
import { useAppTheme } from '~Root/services/theme/hook';

type SIZE = 'medium' | 'small';

interface Props {
  uri: string;
  size?: SIZE;
  styleContainer?: ViewStyle;
}

const ImageFeature: React.FC<Props> = ({
  uri,
  size = 'medium',
  styleContainer = {},
}) => {
  const { globalStyles } = useAppTheme(true);
  let cardSize = styles.cardMedium;

  if (size === 'small') {
    cardSize = styles.cardSmall;
  }

  return (
    <View
      style={[
        GlobalStyles.flexCol,
        GlobalStyles.rounded,
        GlobalStyles.overflowHidden,
        cardSize,
        styleContainer,
      ]}>
      <Image source={{ uri }} resizeMode="cover" style={styles.image} />
      <View style={[styles.bgCard, globalStyles.bgExtra3]} />
    </View>
  );
};

export default ImageFeature;
