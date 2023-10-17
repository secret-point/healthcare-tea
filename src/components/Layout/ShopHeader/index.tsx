import React, { createRef, useMemo, useState } from 'react';
import {
  Dimensions,
  Modal,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { ImageStyle } from 'react-native-fast-image';

import { Image, Paragraph } from '~Root/components';
import { GlobalStyles } from '~Root/config/styles';
import { IMAGES } from '~Root/config/images';
import { IItemMeasure, MODAL_SIZE, onLayoutToggle } from '~Root/utils';
import adjust from '~Root/utils/adjust';
import { ColorVariant } from '~Root/components/Paragraph';

interface Props {
  containerHeaderStyle?: ViewStyle;
  isBack?: boolean;
  iconMenu?: number;
  iconMenuStyle?: ImageStyle;
  iconSearchWhite?: number;
  iconHeartWhite?: number;
  iconCartWhite?: number;
  onBackPress?: () => void;
  isRightIcon?: boolean;
  iconRight?: number;
  iconRightStyle?: ImageStyle;
  title?: string | null;
  titleStyle?: TextStyle;
}

const ShopHeader: React.FC<Props> = ({
  containerHeaderStyle = {},
  isBack = false,
  iconMenu = IMAGES.iconMenu,
  iconMenuStyle = {},
  iconSearchWhite = IMAGES.iconSearchWhite,
  iconHeartWhite = IMAGES.iconHeartWhite,
  iconCartWhite = IMAGES.iconCartWhite,
  onBackPress = () => {},
  title = '',
  titleStyle = {},
}) => {
  const containerRef = createRef<View>();
  const iconRef = createRef<View>();
  const [isPickerOpen, setPicker] = useState(false);
  const [containerMeasure, setContainerMeasure] = useState<IItemMeasure>();
  const [toggleMeasure, setToggleMeasure] = useState<IItemMeasure>();

  const onPick = () => {
    setPicker(!isPickerOpen);
  };

  const yPosition = useMemo(() => {
    const screenHeight = Dimensions.get('window').height;
    const y = (containerMeasure?.y ?? 0) + (toggleMeasure?.height ?? 0);

    return y + MODAL_SIZE > screenHeight
      ? screenHeight - MODAL_SIZE - 2 * adjust(8)
      : y - 20;
  }, [containerMeasure?.y, toggleMeasure?.height]);

  return (
    <View
      ref={containerRef}
      onLayout={() =>
        onLayoutToggle(containerRef, (measure: any) =>
          setContainerMeasure(measure),
        )
      }
      style={[
        GlobalStyles.flexRow,
        GlobalStyles.justifyBetween,
        GlobalStyles.itemsCenter,
        GlobalStyles.bgWhite,
        GlobalStyles.ph15,
        GlobalStyles.pb15,
        GlobalStyles.mt15,
        containerHeaderStyle,
      ]}>
      <View style={GlobalStyles.icon24x24}>
        {!isBack && (
          <TouchableOpacity onPress={onBackPress}>
            <Image
              source={iconMenu}
              resizeMode="contain"
              style={[GlobalStyles.icon24x24, iconMenuStyle]}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={GlobalStyles.itemsCenter}>
        <Paragraph
          colorVariant={ColorVariant.CONTRAST}
          semibold
          h4
          title={title}
          style={titleStyle}
        />
      </View>
      <View
        ref={iconRef}
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.justifyBetween,
          GlobalStyles.itemsCenter,
        ]}>
        <View
          style={[GlobalStyles.ml5, GlobalStyles.mr5, GlobalStyles.icon24x24]}>
          <TouchableOpacity onPress={onBackPress}>
            <Image
              source={iconSearchWhite}
              resizeMode="contain"
              style={[GlobalStyles.icon24x24, iconMenuStyle]}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[GlobalStyles.ml5, GlobalStyles.mr5, GlobalStyles.icon24x24]}>
          <TouchableOpacity onPress={onBackPress}>
            <Image
              source={iconHeartWhite}
              resizeMode="contain"
              style={[GlobalStyles.icon24x24, iconMenuStyle]}
            />
          </TouchableOpacity>
        </View>
        <View
          style={[GlobalStyles.ml5, GlobalStyles.mr5, GlobalStyles.icon24x24]}>
          <TouchableOpacity onPress={onBackPress}>
            <Image
              source={iconCartWhite}
              resizeMode="contain"
              style={[GlobalStyles.icon24x24, iconMenuStyle]}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Modal visible={isPickerOpen} transparent animationType="fade">
        <TouchableOpacity style={[StyleSheet.absoluteFill]} onPress={onPick} />
        <View
          style={[
            GlobalStyles.bgWhite,
            GlobalStyles.selfEnd,
            GlobalStyles.p15,
            GlobalStyles.rounded,
            { top: yPosition, right: adjust(30) },
          ]}>
          <Paragraph title="testing" />
        </View>
      </Modal>
    </View>
  );
};

export default ShopHeader;
