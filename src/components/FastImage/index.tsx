import React from 'react';
import RNFastImage, { FastImageProps } from 'react-native-fast-image';
import { IMAGES } from '~Root/config';

const FastImage = ({ style, ...rest }: FastImageProps) => {
  return (
    <RNFastImage defaultSource={IMAGES.notFound} style={style} {...rest} />
  );
};

FastImage.resizeMode = RNFastImage.resizeMode;
FastImage.priority = RNFastImage.priority;
FastImage.cacheControl = RNFastImage.cacheControl;

export default FastImage;
