import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { GlobalStyles } from '~Root/config/styles';
import { BASE_COLORS } from '~Root/config/theme';
import { ISearchProps } from '~Root/utils';

const Search: React.FC<ISearchProps> = ({
  value,
  onChangeText,
  onClearInput,
  inputStyle,
}) => {
  const [valueState, setValueState] = useState(value);

  function handleChangeText(text: string) {
    onChangeText(text);
    setValueState(text);
  }

  function handleClear() {
    handleChangeText('');
    onClearInput();
  }

  return (
    <View
      style={[
        GlobalStyles.widthFull,
        GlobalStyles.justifyBetween,
        GlobalStyles.selfCenter,
        GlobalStyles.flexRow,
      ]}>
      <View style={GlobalStyles.selfCenter}>
        <Icon name="search-outline" size={22} color={BASE_COLORS.blackColor} />
      </View>
      <TextInput
        placeholder="Country name or abbreviation"
        value={valueState}
        onChangeText={handleChangeText}
        style={[
          GlobalStyles.mh10,
          GlobalStyles.mv5,
          GlobalStyles.container,
          GlobalStyles.textBlack,
          inputStyle,
        ]}
        testID="search-input"
      />
      {valueState ? (
        <View>
          <TouchableOpacity onPress={handleClear} testID="clear-button">
            <Icon
              name="close-circle-outline"
              size={22}
              color={BASE_COLORS.blackColor}
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};

export default Search;
