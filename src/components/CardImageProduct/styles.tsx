import { StyleSheet, Dimensions } from 'react-native';
import adjust from '~Root/utils/adjust';
import { BASE_COLORS } from '~Root/config/theme';

const { width } = Dimensions.get('screen');
let originalWidth = (width - 45) / 1.7;
const ratio = originalWidth / 200;

export default StyleSheet.create({
  cardMedium: {
    width: originalWidth,
    height: 152 * ratio,
  },
  titleContainer: {
    width: originalWidth - adjust(10),
    height: '100%',
    zIndex: 12,
  },
  titleContainerMedium: {
    position: 'absolute',
    top: adjust(10),
    left: adjust(10),
  },
  image: {
    width: '100%',
    height: '100%',
    zIndex: 8,
  },
  bgCard: {
    width: '100%',
    height: '100%',
    zIndex: 10,
    opacity: 0.3,
    position: 'absolute',
  },
  category: {
    color: '#C5C5E8',
    paddingTop: 8,
    paddingBottom: 5,
    fontWeight: '500',
  },
  favoriteContainer: {
    width: 24,
    zIndex: 12,
    position: 'absolute',
    top: adjust(8),
    right: adjust(15),
  },
  priceContainer: {
    zIndex: 12,
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: BASE_COLORS.blackColor,
    width: '100%',
  },
  priceBackground: {
    alignItems: 'center',
    backgroundColor: '#C5C5E8',
    borderRadius: 8,
    shadowColor: BASE_COLORS.blackColor,
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { height: 2, width: 2 },
    paddingRight: 10,
    paddingLeft: 10,
  },
  priceBackgroundWhite: {
    backgroundColor: BASE_COLORS.whiteColor,
  },
  priceRegular: {
    color: BASE_COLORS.blackColor,
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: '700',
    fontSize: adjust(14),
    flex: 0,
  },
  priceWithoutSale: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: '#A8A6AA',
    fontWeight: '500',
    fontSize: adjust(10),
    paddingLeft: 5,
    flex: 0,
  },
  authorWrapper: {
    flex: 0,
  },
  starWrapper: {
    flex: 0,
  },
  author: {
    color: '#C5C5E8',
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: '500',
  },
  rating: {
    fontWeight: '700',
    fontSize: adjust(15),
    color: BASE_COLORS.whiteColor,
    paddingLeft: 5,
    flex: 0,
  },
});
