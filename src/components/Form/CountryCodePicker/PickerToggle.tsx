import React, { createRef } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { GlobalStyles } from '~Root/config/styles';
import { BASE_COLORS } from '~Root/config/theme';
import { IPickerToggleProps, onLayoutToggle } from '~Root/utils';
import Flag from './Flag';
import styles from './styles';

const PickerToggle: React.FC<IPickerToggleProps> = ({
  flag,
  isPickerOpen,
  onPickerToggle,
  containerStyle,
  onLayout,
  isFlagVisible = true,
}) => {
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
      style={containerStyle}
      ref={containerRef}
      onLayout={() =>
        onLayout &&
        onLayoutToggle(containerRef, (measure: any) => onLayout(measure))
      }>
      <TouchableOpacity
        onPress={() => onPickerToggle(!isPickerOpen)}
        testID="toggle-button">
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.itemsCenter,
            GlobalStyles.justifyBetween,
            styles.box,
          ]}>
          <View style={[GlobalStyles.flexRow, GlobalStyles.itemsCenter]}>
            {isFlagVisible && <Flag flag={flag} />}
            {/* <Paragraph textWhite title={countryName} style={GlobalStyles.mr5} /> */}
            {/* <Paragraph textWhite title={`(+${selectedCode})`} /> */}
          </View>
          <View style={arrowDownStyle}>
            <Icon
              name="chevron-down-outline"
              size={15}
              color={BASE_COLORS.blackColor}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PickerToggle;
