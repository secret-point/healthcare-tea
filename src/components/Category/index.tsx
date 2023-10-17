import React from 'react';
import { TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { Paragraph } from '~Root/components';
import { GlobalStyles } from '~Root/config';
import createStyles from './styles';
import { useAppTheme } from '~Root/services/theme/hook';

interface Props {
  onPress?: (item: any) => void;
  name?: string;
  styleTag?: ViewStyle;
  tagText?: TextStyle;
  selected?: boolean;
}

const Category: React.FC<Props> = ({
  onPress = () => {},
  name,
  styleTag = {},
  tagText = {},
  selected = false,
}) => {
  const { theme } = useAppTheme();
  const styles = createStyles(theme);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        selected ? styles.tagActive : styles.tag,
        GlobalStyles.mr10,
        styleTag,
      ]}>
      {selected ? (
        <Paragraph textWhite h5 style={[tagText]} title={name ?? ''} />
      ) : (
        <Paragraph h5 style={[tagText]} title={name ?? ''} />
      )}
    </TouchableOpacity>
  );
};

export default Category;
