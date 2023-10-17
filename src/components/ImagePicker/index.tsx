import React, { memo, useEffect } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAppTheme } from '~Root/services/theme/hook';
import FastImage from '~Root/components/FastImage';
import { Asset } from 'react-native-image-picker/src/types';
import { usePickImage } from '~Root/config/hooks';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  onError?: () => void;
  onSelectImage?: (image: Asset | undefined) => void;
};

const ImagePicker = memo(
  ({ containerStyle, onSelectImage, onError }: Props) => {
    const { theme } = useAppTheme();
    const { onPickImage, image } = usePickImage();

    useEffect(() => {
      if (onSelectImage) {
        onSelectImage(image);
      }
    }, [onSelectImage, image]);

    return (
      <TouchableOpacity
        style={[styles.imagePicker, containerStyle]}
        onPress={onPickImage}>
        <FastImage
          style={styles.image}
          resizeMode={FastImage.resizeMode.cover}
          source={{ uri: image?.uri }}
          onError={onError}
        />
        <Icon name="camera-outline" color={theme.contrastColor} size={30} />
      </TouchableOpacity>
    );
  },
);

export default ImagePicker;
