import React, { createRef, memo, useEffect, useState } from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  ListRenderItemInfo,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import countries, { ICountry } from '~Root/utils/countries';
import { sortData, ICallingCodePickerProps } from '~Root/utils';
import PickerItem from './PickerItem';
import PickerToggle from './PickerToggle';
import styles from './styles';
import { GlobalStyles } from '~Root/config/styles';

const CountryDropDown: React.FC<ICallingCodePickerProps> = memo(
  ({
    onValueChange,
    toggleContainerStyle,
    listContainerStyle,
    listStyle,
    searchInputStyle,
    style,
    isFlagVisible = true,
  }) => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
    const [countriesData, setCountriesData] = useState<ICountry[]>(
      sortData(countries, ''),
    );
    const [selectedCountry, setSelectedCountry] = useState<
      ICountry | undefined
    >();
    const containerRef = createRef<View>();

    const handleCountrySelect = (country: ICountry) => {
      setSelectedCountry(country);
      setIsPickerOpen(false);
      setSearchValue(country.name);
    };

    useEffect(() => {
      let newCountries = countries.filter(
        (s: any) =>
          s.callingCode === searchValue.trim() ||
          s.alpha2Code
            .trim()
            .toLowerCase()
            .includes(searchValue.trim().toLowerCase()) ||
          s.name
            .trim()
            .toLowerCase()
            .includes(searchValue.trim().toLowerCase()),
      );

      newCountries = sortData(newCountries, searchValue);

      setCountriesData(newCountries);
    }, [searchValue]);

    const renderPickerItem = (renderItem: ListRenderItemInfo<ICountry>) => {
      const { item: country } = renderItem;
      return (
        <PickerItem country={country} onCountrySelect={handleCountrySelect} />
      );
    };

    useEffect(() => {
      onValueChange(selectedCountry);
    }, [selectedCountry, onValueChange]);

    function dismissPicker() {
      // setIsPickerOpen(false);
      setSearchValue('');
    }

    const onFocus = () => {
      setIsPickerOpen(true);
    };

    const onBlur = () => {
      // setIsPickerOpen(false);
    };

    const onChangeText = (text: string) => {
      if (!isPickerOpen) {
        setIsPickerOpen(true);
      }
      setSearchValue(text);
    };

    return (
      <View style={style} ref={containerRef}>
        <PickerToggle
          flag={selectedCountry?.flag}
          selectedCode={selectedCountry?.callingCode}
          isPickerOpen={isPickerOpen}
          onPickerToggle={setIsPickerOpen}
          containerStyle={toggleContainerStyle}
          isFlagVisible={isFlagVisible}
          value={searchValue}
          onChangeText={onChangeText}
          onClearInput={() => setSearchValue('')}
          inputStyle={searchInputStyle}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        {isPickerOpen && (
          <View style={GlobalStyles.container}>
            <TouchableOpacity
              style={[GlobalStyles.widthFull]}
              onPress={dismissPicker}
            />
            <KeyboardAvoidingView
              behavior="position"
              style={[styles.keyboardAvoidingView]}
              keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : -60}>
              <View style={listContainerStyle ?? styles.listContainer}>
                <FlatList
                  data={countriesData}
                  renderItem={renderPickerItem}
                  keyExtractor={(_, index) => index.toString()}
                  showsVerticalScrollIndicator={false}
                  style={listStyle}
                  keyboardShouldPersistTaps="always"
                />
              </View>
            </KeyboardAvoidingView>
          </View>
        )}
      </View>
    );
  },
);

export default CountryDropDown;
