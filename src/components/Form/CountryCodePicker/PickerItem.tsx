import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Paragraph, { ColorVariant } from '~Root/components/Paragraph';
import { GlobalStyles } from '~Root/config/styles';
import { IPickerItemProps } from '~Root/utils';
import Flag from './Flag';
import styles from './styles';

const PickerItem: React.FC<IPickerItemProps> = ({
  country,
  onCountrySelect,
}) => {
  const { flag, callingCode } = country;
  return (
    <TouchableOpacity
      onPress={() => onCountrySelect(country)}
      testID="picker-item">
      <View style={[GlobalStyles.flexRow, GlobalStyles.p10]}>
        <Flag flag={flag} styleContainer={GlobalStyles.mr10} />
        <View style={GlobalStyles.selfCenter}>
          <Paragraph
            p
            title={`+${callingCode} `}
            style={styles.code}
            colorVariant={ColorVariant.REV_CONTRAST}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PickerItem;
