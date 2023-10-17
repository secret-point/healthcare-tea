import React, { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { GlobalStyles } from '~Root/config/styles';
import { BASE_COLORS } from '~Root/config/theme';
import { ISearchProps, ISearchPropsExtends } from '~Root/utils';

const Search: React.FC<ISearchProps & ISearchPropsExtends> = ({
  value,
  onChangeText,
  inputStyle,
  onFocus,
  onBlur,
  flag,
}) => {
  const [valueState, setValueState] = useState(value);

  useEffect(() => {
    setValueState(value);
  }, [value]);

  function handleChangeText(text: string) {
    onChangeText(text);
    setValueState(text);
  }

  return (
    <View
      style={[
        GlobalStyles.container,
        GlobalStyles.justifyBetween,
        GlobalStyles.selfCenter,
        GlobalStyles.flexRow,
      ]}>
      {!flag && (
        <View style={GlobalStyles.selfCenter}>
          <Icon
            name="search-outline"
            size={22}
            color={BASE_COLORS.blackColor}
          />
        </View>
      )}
      <TextInput
        placeholder="Search"
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
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </View>
  );
};

export default Search;
