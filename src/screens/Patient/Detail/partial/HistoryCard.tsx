import React, { memo, ReactElement } from 'react';
import { ViewStyle } from 'react-native';

import { GlobalStyles } from '~Root/config/styles';
import { Extra2View } from '~Root/components';

type Props = {
  containerStyle?: ViewStyle;
  children?: ReactElement;
};

const PatientDetailHistoryCard = memo(({ containerStyle, children }: Props) => {
  return (
    <Extra2View
      style={[
        GlobalStyles.rounded,
        GlobalStyles.pv25,
        GlobalStyles.ph15,
        GlobalStyles.container,
        containerStyle,
      ]}>
      {children}
    </Extra2View>
  );
});

export default PatientDetailHistoryCard;
