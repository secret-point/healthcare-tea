import React, { createRef } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { GlobalStyles } from '~Root/config/styles';
import { BASE_COLORS } from '~Root/config/theme';
import {
  IDataDropDown,
  IPickerDropDownProps,
  onLayoutToggle,
} from '~Root/utils';
import Paragraph, { ColorVariant } from '../../Paragraph';
import styles from './styles';
import { useTranslation } from 'react-i18next';

const PickerToggle = <T extends IDataDropDown>({
  isPickerOpen,
  customSelectedItem,
  onPickerToggle,
  containerStyle,
  selected,
  onLayout,
}: IPickerDropDownProps<T>) => {
  const { t } = useTranslation();
  const containerRef = createRef<View>();

  const arrowDownStyle: StyleProp<ViewStyle> = {
    transform: [
      {
        rotate: isPickerOpen ? '180deg' : '0deg',
      },
    ],
  };

  return (
    <View
      style={[styles.box, containerStyle]}
      ref={containerRef}
      onLayout={() =>
        onLayoutToggle(containerRef, (measure: any) => onLayout(measure))
      }>
      <TouchableOpacity
        onPress={() => onPickerToggle(!isPickerOpen)}
        testID="toggle-button"
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.itemsCenter,
          GlobalStyles.justifyBetween,
        ]}>
        <View style={styles.selectedWrap}>
          {customSelectedItem ? (
            customSelectedItem(selected)
          ) : (
            <Paragraph
              p
              medium
              colorVariant={ColorVariant.EXTRA4}
              title={selected?.name ?? t('please_select')}
            />
          )}
        </View>
        <View style={arrowDownStyle}>
          <Icon
            name="chevron-down-outline"
            size={15}
            color={BASE_COLORS.blackColor}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PickerToggle;
