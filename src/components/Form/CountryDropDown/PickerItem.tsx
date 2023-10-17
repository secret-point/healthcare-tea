import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Paragraph, { ColorVariant } from '~Root/components/Paragraph';
import { GlobalStyles } from '~Root/config/styles';
import { IPickerItemProps } from '~Root/utils';
import Flag from './Flag';

const PickerItem: React.FC<IPickerItemProps> = ({
  country,
  onCountrySelect,
}) => {
  const { flag, name } = country;
  return (
    <TouchableOpacity
      onPress={() => onCountrySelect(country)}
      testID="picker-item">
      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.p10,
          GlobalStyles.itemsCenter,
        ]}>
        <View style={GlobalStyles.container}>
          <Paragraph p title={name} colorVariant={ColorVariant.REV_CONTRAST} />
        </View>
        <Flag flag={flag} styleContainer={GlobalStyles.mr20} />
      </View>
    </TouchableOpacity>
  );
};

export default PickerItem;
