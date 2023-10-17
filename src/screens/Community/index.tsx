import { View } from 'react-native';
import React from 'react';

import { GlobalStyles } from '~Root/config/styles';
import { Paragraph } from '~Root/components';

const Community = () => {
  return (
    <View style={[GlobalStyles.container]}>
      <Paragraph title="Community" />
    </View>
  );
};

export default Community;
