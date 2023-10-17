import React, { createRef } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { GlobalStyles } from '~Root/config/styles';
import {
  IPickerToggleProps,
  ISearchProps,
  ISearchPropsExtends,
  onLayoutToggle,
} from '~Root/utils';
import Flag from './Flag';
import Search from './Search';
import styles from './styles';

type Props = IPickerToggleProps & ISearchProps & ISearchPropsExtends;

const PickerToggle: React.FC<Props> = ({
  flag,
  isPickerOpen,
  onPickerToggle,
  containerStyle,
  onLayout,
  isFlagVisible = true,
  value = '',
  onChangeText,
  inputStyle,
  onFocus,
  onBlur,
}) => {
  const containerRef = createRef<View>();

  return (
    <View
      style={containerStyle}
      ref={containerRef}
      onLayout={() => onLayout && onLayoutToggle(containerRef, onLayout)}>
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
            <Search
              value={value}
              flag={flag}
              onChangeText={onChangeText}
              onClearInput={() => onChangeText('')}
              inputStyle={inputStyle}
              onFocus={onFocus}
              onBlur={onBlur}
            />
            {isFlagVisible && flag !== '' && <Flag flag={flag} />}
            {/* <Paragraph textWhite title={countryName} style={GlobalStyles.mr5} /> */}
            {/* <Paragraph textWhite title={`(+${selectedCode})`} /> */}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PickerToggle;
