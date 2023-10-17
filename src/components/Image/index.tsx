import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import FastImage, { FastImageProps } from 'react-native-fast-image';
import styles from './styles';

const Image = ({
  style = {},
  resizeMode = 'contain',
  ...rest
}: FastImageProps) => {
  let resize: any = FastImage.resizeMode.cover;

  switch (resizeMode) {
    case 'contain':
      resize = FastImage.resizeMode.contain;
      break;
    case 'stretch':
      resize = FastImage.resizeMode.stretch;
      break;
    case 'center':
      resize = FastImage.resizeMode.center;
      break;
    default:
      break;
  }

  const [loading, setLoading] = useState(false);

  return (
    <View style={StyleSheet.flatten([style && style])}>
      {loading && (
        <View style={StyleSheet.flatten([style && style, styles.container])}>
          <ActivityIndicator size="large" color="#000" />
        </View>
      )}
      <FastImage
        style={StyleSheet.flatten([style && style])}
        {...rest}
        onLoadStart={() => {
          setLoading(true);
        }}
        onLoadEnd={() => {
          setLoading(false);
        }}
        resizeMode={resize}
      />
    </View>
  );
};

export default Image;
