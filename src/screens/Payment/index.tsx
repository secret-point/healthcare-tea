import { View } from 'react-native';
import React from 'react';

import { GlobalStyles } from '~Root/config/styles';
import { Paragraph } from '~Root/components';

const PaymentScreen = () => {
  return (
    <View style={[GlobalStyles.container]}>
      <Paragraph title="Payment" />
    </View>
  );
};

export default PaymentScreen;
