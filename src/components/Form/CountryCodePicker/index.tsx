import React, { createRef, memo, useEffect, useState } from 'react';
import {
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  ListRenderItemInfo,
  Modal,
  Platform,
  TouchableOpacity,
  View,
} from 'react-native';
import * as RNLocalize from 'react-native-localize';
import countries, { ICountry } from '~Root/utils/countries';
import {
  onLayoutToggle,
  sortData,
  MODAL_SIZE,
  IItemMeasure,
  ICallingCodePickerProps,
} from '~Root/utils';
import PickerItem from './PickerItem';
import PickerToggle from './PickerToggle';
import Search from './Search';
import styles from './styles';
import adjust from '~Root/utils/adjust';
import { GlobalStyles } from '~Root/config/styles';
import { Paragraph } from '~Root/components';

const CountryCodePicker: React.FC<ICallingCodePickerProps> = memo(
  ({
    label,
    containerStyle,
    initialCountryCode,
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
    const localCountryCode = countries.find(
      f => f.alpha2Code === RNLocalize.getCountry(),
    );
    const [selectedCountry, setSelectedCountry] = useState<
      ICountry | undefined
    >(
      initialCountryCode
        ? countries.find(f => f.alpha2Code === initialCountryCode) ??
            localCountryCode
        : localCountryCode,
    );
    const containerRef = createRef<View>();
    const [toggleMeasure, setToggleMeasure] = useState<IItemMeasure>();
    const [containerMeasure, setContainerMeasure] = useState<IItemMeasure>();

    const handleCountrySelect = (country: ICountry) => {
      setSelectedCountry(country);
      setIsPickerOpen(false);
      setSearchValue('');
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

    function calculateModalVerticalPosition() {
      const screenHeight = Dimensions.get('window').height;
      const y = (containerMeasure?.y ?? 0) + (toggleMeasure?.height ?? 0);

      return y + MODAL_SIZE > screenHeight
        ? screenHeight - MODAL_SIZE - 2 * adjust(8)
        : y;
    }

    useEffect(() => {
      onValueChange(selectedCountry?.callingCode);
    }, [selectedCountry, onValueChange]);

    function dismissPicker() {
      setIsPickerOpen(false);
      setSearchValue('');
    }

    const yPosition = calculateModalVerticalPosition();

    return (
      <View style={[GlobalStyles.flexCol, containerStyle]}>
        {label && (
          <Paragraph p textWhite title={label} style={GlobalStyles.mb5} />
        )}
        <View
          style={style}
          ref={containerRef}
          onLayout={() =>
            onLayoutToggle(containerRef, (measure: any) =>
              setContainerMeasure(measure),
            )
          }>
          <PickerToggle
            flag={selectedCountry?.flag}
            isPickerOpen={isPickerOpen}
            onPickerToggle={setIsPickerOpen}
            containerStyle={toggleContainerStyle}
            onLayout={(measure: any) => setToggleMeasure(measure)}
            isFlagVisible={isFlagVisible}
          />
          <Modal visible={isPickerOpen} transparent animationType="fade">
            <View style={GlobalStyles.container}>
              <TouchableOpacity
                style={[GlobalStyles.widthFull, GlobalStyles.container]}
                onPress={dismissPicker}
              />
              <KeyboardAvoidingView
                behavior="position"
                style={[styles.keyboardAvoidingView, { top: yPosition }]}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : -60}>
                <View style={listContainerStyle ?? styles.listContainer}>
                  <Search
                    value={searchValue}
                    onChangeText={setSearchValue}
                    onClearInput={() => setSearchValue('')}
                    inputStyle={searchInputStyle}
                  />
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
          </Modal>
        </View>
      </View>
    );
  },
);

export default CountryCodePicker;
