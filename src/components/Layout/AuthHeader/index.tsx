import React from 'react';
import { View, TouchableOpacity, ViewStyle, Image } from 'react-native';

import { GlobalStyles, IMAGES } from '~Root/config';
import Paragraph from '../../Paragraph';
import styles from './styles';

export interface Props {
  styleContainer?: ViewStyle;
  style?: ViewStyle;
  styleLeft?: ViewStyle;
  styleLogoContainer?: ViewStyle;
  showLeft?: boolean;
  onPressLeft?: () => void;
  isLogo?: boolean;
  logoTitle?: string | null;
}

const AuthHeader: React.FC<Props> = ({
  styleContainer = {},
  style = {},
  styleLeft = {},
  styleLogoContainer = {},
  showLeft = true,
  onPressLeft = () => {},
  isLogo = true,
  logoTitle = '',
}) => {
  return (
    <View style={[styles.widthFull, styleContainer]}>
      <View style={[GlobalStyles.flexRow, style]}>
        {showLeft && (
          <TouchableOpacity
            style={[styles.iconBackContainer, styleLeft]}
            onPress={onPressLeft}>
            <Image source={IMAGES.iconBack24x24} resizeMode={'contain'} />
          </TouchableOpacity>
        )}
        <View
          style={[
            GlobalStyles.container,
            GlobalStyles.itemsCenter,
            GlobalStyles.icon157x70,
            styleLogoContainer,
          ]}>
          {isLogo ? (
            <View
              style={[
                GlobalStyles.container,
                GlobalStyles.itemsCenter,
                GlobalStyles.icon157x70,
              ]}>
              <Image source={IMAGES.logo} resizeMode={'contain'} />
            </View>
          ) : (
            <Paragraph semibold h5 textWhite title={logoTitle} />
          )}
        </View>
      </View>
    </View>
  );
};

export default AuthHeader;
