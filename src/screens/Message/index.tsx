import { View } from 'react-native';
import React from 'react';

import { GlobalStyles } from '~Root/config/styles';
import { Paragraph } from '~Root/components';

const MessageScreen = () => {
  return (
    <View style={[GlobalStyles.container]}>
      <Paragraph title="Message" />
    </View>
  );
};

export default MessageScreen;
