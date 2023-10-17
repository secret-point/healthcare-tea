import { TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';

import { GlobalStyles } from '~Root/config';
import { Image, Paragraph } from '~Root/components';
import styles from './styles';
import { useAppTheme } from '~Root/services/theme/hook';

type SIZE = 'medium' | 'small';

interface Props {
  title: string;
  subTitle?: string;
  uri: string;
  size?: SIZE;
  styleContainer?: ViewStyle;
  onPress?: () => void;
}

const CardImageLearning: React.FC<Props> = ({
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
      <Image source={{ uri }} resizeMode="cover" style={styles.image} />
      <View style={[styles.bgCard, globalStyles.bgExtra3]} />
      <View style={[styles.titleContainer, titleContainer]}>
        <Paragraph p semibold textWhite title={title} />
        {subTitle && (
          <Paragraph
            regular
            textWhite
            title={subTitle ?? ''}
            style={[GlobalStyles.lineHeight9, GlobalStyles.font7]}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CardImageLearning;
