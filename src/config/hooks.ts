import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import { launchImageLibrary, Asset } from 'react-native-image-picker';
import { debounce } from 'lodash';
import { RootState } from '~Root/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDebounce = <T extends (...args: any) => void>(
  callback: T,
  wait: number = 300,
) => {
  return useRef(debounce<T>(callback, wait));
};

export const usePickImage = () => {
  const [image, setImage] = useState<Asset | undefined>(undefined);

  const onPickImage = async () => {
    const result = await launchImageLibrary({
      selectionLimit: 1,
      mediaType: 'photo',
    });

    const asset = result.assets?.[0];

    if (!asset) {
      return;
    }

    setImage(asset);
  };

  return {
    image,
    setImage,
    onPickImage,
  };
};
