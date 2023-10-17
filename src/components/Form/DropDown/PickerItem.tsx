import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Paragraph, { ColorVariant } from '~Root/components/Paragraph';
import { GlobalStyles } from '~Root/config/styles';
import { IDataDropDown, IDropDownItemProps } from '~Root/utils';

const PickerItem = <T extends IDataDropDown>({
  item,
  onSelect,
  containerStyle,
}: IDropDownItemProps<T>) => {
  return (
    <TouchableOpacity onPress={() => onSelect(item)} testID="picker-item">
      <View
        style={
          containerStyle ?? [
            GlobalStyles.flexRow,
            GlobalStyles.ph5,
            GlobalStyles.pv5,
          ]
        }>
        <Paragraph colorVariant={ColorVariant.EXTRA4} h5 title={item?.name} />
      </View>
    </TouchableOpacity>
  );
};

export default PickerItem;
