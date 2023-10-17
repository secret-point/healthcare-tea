import React, { memo } from 'react';
import { TouchableOpacity, ViewStyle } from 'react-native';

import { GlobalStyles } from '~Root/config/styles';
import { Image } from '~Root/components';
import { IMAGES } from '~Root/config';
import { useAppTheme } from '~Root/services/theme/hook';

type Props = {
  onPress?: () => void;
  containerStyle?: ViewStyle;
};

const FilterButton = memo(({ onPress, containerStyle }: Props) => {
  const { globalStyles } = useAppTheme(true);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        globalStyles.bgExtra1,
        GlobalStyles.p10,
        GlobalStyles.itemsCenter,
        GlobalStyles.justifyCenter,
        GlobalStyles.rounded8,
        GlobalStyles.withBox,
        GlobalStyles.heightBox,
        containerStyle,
      ]}>
      <Image
        source={IMAGES.iconFilter24x24}
        resizeMode="cover"
        style={GlobalStyles.icon18x18}
      />
    </TouchableOpacity>
  );
});

export default FilterButton;
