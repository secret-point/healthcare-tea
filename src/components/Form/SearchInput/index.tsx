import { View, TextInput, ViewStyle, StyleProp } from 'react-native';
import React from 'react';
import { GlobalStyles, IMAGES } from '~Root/config';
import { Image } from '~Root/components';
import createStyles from './styles';
import { useAppTheme } from '~Root/services/theme/hook';

interface Props {
  textSearch?: string;
  setTextSearch?: (text: string) => void;
  styleContainer?: StyleProp<ViewStyle>;
}

const SearchInput: React.FC<Props> = ({
  textSearch = '',
  setTextSearch = () => {},
  styleContainer,
}) => {
  const { theme, globalStyles } = useAppTheme(true);
  const styles = createStyles(theme);
  return (
    <View
      style={[
        globalStyles.bgExtra2,
        GlobalStyles.rounded8,
        GlobalStyles.itemsCenter,
        GlobalStyles.flexRow,
        GlobalStyles.inputStyle,
        GlobalStyles.p10,
        styleContainer,
      ]}>
      <Image
        source={IMAGES.iconSearch16x16}
        resizeMode="cover"
        style={[GlobalStyles.icon15x15, GlobalStyles.mr5]}
      />
      <TextInput
        value={textSearch}
        onChangeText={setTextSearch}
        placeholder="Search"
        placeholderTextColor={theme.extra1Color}
        style={[GlobalStyles.container, styles.textInput]}
      />
    </View>
  );
};

export default SearchInput;
