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

import { Image, Link, Paragraph } from '~Root/components';
import { GlobalStyles } from '~Root/config/styles';
import { IMAGES } from '~Root/config/images';
import { IItemMeasure, MODAL_SIZE, onLayoutToggle } from '~Root/utils';
import adjust from '~Root/utils/adjust';
import { ColorVariant } from '~Root/components/Paragraph';
import { useTranslation } from 'react-i18next';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppTheme } from '~Root/services/theme/hook';

interface Props {
  containerHeaderStyle?: ViewStyle;
  isBack?: boolean;
  iconBack?: number;
  iconBackStyle?: ImageStyle;
  onBackPress?: () => void;
  isRightIcon?: boolean;
  iconRight?: number;
  iconRightStyle?: ImageStyle;
  title?: string | null;
  titleStyle?: TextStyle;
  onSkip?: () => void;
}

const Header: React.FC<Props> = ({
  containerHeaderStyle = {},
  isBack = false,
  iconBackStyle = {},
  onBackPress = () => {},
  isRightIcon = false,
  iconRight = IMAGES.iconThreeDot,
  iconRightStyle = {},
  title = '',
  titleStyle = {},
  onSkip,
}) => {
  const { t } = useTranslation();
  const { theme } = useAppTheme();
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
        GlobalStyles.ph10,
        GlobalStyles.pb20,
        containerHeaderStyle,
        GlobalStyles.widthFull,
      ]}>
      <View style={GlobalStyles.icon24x24}>
        {isBack && (
          <TouchableOpacity onPress={onBackPress}>
            <Icon
              name="chevron-back-outline"
              size={30}
              color={theme.contrastColor}
              style={[iconBackStyle]}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={[GlobalStyles.itemsCenter]}>
        <Paragraph
          colorVariant={ColorVariant.CONTRAST}
          semibold
          title={title}
          style={titleStyle}
          h4
        />
      </View>
      {!!onSkip && (
        <View>
          <Link
            colorVariant={ColorVariant.EXTRA2}
            medium
            title={t('skip')}
            onPress={onSkip}
            h5
          />
        </View>
      )}
      {isRightIcon ? (
        <View
          ref={iconRef}
          onLayout={() =>
            onLayoutToggle(containerRef, (measure: any) =>
              setToggleMeasure(measure),
            )
          }>
          <TouchableOpacity
            onPress={onPick}
            style={[
              GlobalStyles.icon24x24,
              GlobalStyles.itemsCenter,
              GlobalStyles.justifyCenter,
            ]}>
            <Image
              source={iconRight}
              resizeMode="contain"
              style={[GlobalStyles.icon4x16, iconRightStyle]}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={GlobalStyles.icon24x24} />
      )}
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

export default Header;
