import { TouchableOpacity, View, Text, ViewStyle } from 'react-native';
import React from 'react';

import { GlobalStyles, IMAGES } from '~Root/config';
import { Paragraph, Image } from '~Root/components';
import styles from './styles';
import { useAppTheme } from '~Root/services/theme/hook';
import FastImage from '~Root/components/FastImage';

interface Props {
  title: string;
  price: number;
  salePrice?: number;
  image: string;
  rating?: number;
  author?: string;
  category?: string;
  demoType?: number;
  styleContainer?: ViewStyle;
  onPressItem?: () => void;
}
const CardImageProduct: React.FC<Props> = ({
  title = '',
  price,
  salePrice = '',
  image,
  author = '',
  rating = undefined,
  category = '',
  demoType = Math.floor(Math.random() * 4) + 1,
  styleContainer,
  onPressItem,
}) => {
  const { globalStyles } = useAppTheme(true);
  let cardSize = styles.cardMedium;
  const onBackPress = () => {};
  let imageProps =
    demoType === 1
      ? require(`~Root/assets/demos/unsplash_a8lTjWJJgLA.png`)
      : demoType === 2
      ? require(`~Root/assets/demos/unsplash_a8lTjWJJgLC.png`)
      : demoType === 3
      ? require(`~Root/assets/demos/unsplash_a8lTjWJJgLD.png`)
      : require(`~Root/assets/demos/unsplash_a8lTjWJJgLB.png`);

  if (image) {
    imageProps = { uri: image };
  }
  return (
    <TouchableOpacity onPress={onPressItem}>
      <View
        style={[
          GlobalStyles.flexCol,
          GlobalStyles.rounded,
          GlobalStyles.overflowHidden,
          cardSize,
          styleContainer,
        ]}>
        <FastImage
          source={imageProps}
          resizeMode={FastImage.resizeMode.cover}
          style={styles.image}
        />
        <View style={[styles.bgCard, globalStyles.bgExtra3]} />
        <View
          style={[
            GlobalStyles.container,
            GlobalStyles.justifyBetween,
            styles.favoriteContainer,
          ]}>
          <TouchableOpacity onPress={onBackPress}>
            <Image
              source={IMAGES.iconHeartWhite}
              resizeMode="contain"
              style={[GlobalStyles.icon24x24]}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[
            GlobalStyles.container,
            GlobalStyles.flexRow,
            styles.priceContainer,
          ]}>
          {salePrice && salePrice !== price ? (
            <View
              style={[
                GlobalStyles.flexRow,
                styles.priceBackground,
                styles.priceBackgroundWhite,
              ]}>
              <Text style={[styles.priceRegular]}>{salePrice}$</Text>
              <Text style={[styles.priceWithoutSale]}>{price}$</Text>
            </View>
          ) : (
            <View style={[GlobalStyles.flexRow, styles.priceBackground]}>
              <Text style={[styles.priceRegular]}>{price}$</Text>
            </View>
          )}
        </View>
      </View>
      <View
        style={[
          GlobalStyles.container,
          GlobalStyles.justifyBetween,
          { width: cardSize.width },
        ]}>
        {category && <Text style={[styles.category]}>{category}</Text>}
        <Paragraph semibold textWhite p title={title} />
        <View
          style={[
            GlobalStyles.container,
            GlobalStyles.flexRow,
            GlobalStyles.justifyBetween,
            { width: cardSize.width },
          ]}>
          <View style={[styles.authorWrapper]}>
            {author && <Text style={[styles.author]}>{author}</Text>}
          </View>
          <View
            style={[
              GlobalStyles.container,
              GlobalStyles.flexRow,
              GlobalStyles.justifyBetween,
              GlobalStyles.itemsCenter,
              styles.starWrapper,
            ]}>
            {rating && (
              <>
                <Image
                  source={IMAGES.iconStarYellow}
                  resizeMode="contain"
                  style={[GlobalStyles.icon18x18]}
                />
                <Text style={[styles.rating]}>{rating}</Text>
              </>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardImageProduct;
