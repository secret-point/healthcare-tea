import { View, ViewStyle } from 'react-native';
import React from 'react';

import styles from './styles';
import Image from '../../Image';
import { GlobalStyles } from '~Root/config';

type IFlagProps = {
  flag?: any;
  styleContainer?: ViewStyle;
};

const Flag: React.FC<IFlagProps> = ({ flag, styleContainer = {} }) => {
  return (
    <View style={[GlobalStyles.mr5, styles.flagContainer, styleContainer]}>
      <Image source={flag} resizeMode="contain" style={styles.flag} />
    </View>
  );
};

export default Flag;
