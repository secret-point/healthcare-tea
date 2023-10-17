import React, { createRef, useState } from 'react';
import {
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  onLayoutToggle,
  MODAL_SIZE,
  IItemMeasure,
  IDropDownProps,
  IDataDropDown,
} from '~Root/utils';
import PickerToggle from './PickerToggle';
import styles from './styles';
import adjust from '~Root/utils/adjust';
import { GlobalStyles } from '~Root/config/styles';
import PickerItem from './PickerItem';
import { Paragraph } from '~Root/components';
import { ColorVariant } from '~Root/components/Paragraph';

const DropDown = <T extends IDataDropDown>({
  label,
  labelColor = ColorVariant.EXTRA2,
  data = [],
  onValueChange,
  customSelectedItem,
  containerStyle,
  toggleContainerStyle,
  toggleLabelStyle,
  listContainerStyle,
  listStyle,
  pickerItemContainerStyle,
  style,
  dataDefault,
}: IDropDownProps<T>) => {
  const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
  const [dataSelected, setDataSelected] = useState<T | undefined>(dataDefault);
  const containerRef = createRef<View>();
  const [toggleMeasure, setToggleMeasure] = useState<IItemMeasure>();
  const [containerMeasure, setContainerMeasure] = useState<IItemMeasure>();

  const handleSelect = (item: T) => {
    setDataSelected(item);
    setIsPickerOpen(false);
    onValueChange(item);
  };

  const renderPickerItem = ({ item }: { item: T }) => (
    <PickerItem
      item={item}
      onSelect={handleSelect}
      containerStyle={pickerItemContainerStyle}
    />
  );

  function calculateModalVerticalPosition() {
    const screenHeight = Dimensions.get('window').height;
    const y = (containerMeasure?.y ?? 0) + (toggleMeasure?.height ?? 0);

    return y + MODAL_SIZE > screenHeight
      ? screenHeight - MODAL_SIZE - 2 * adjust(8)
      : y;
  }

  function dismissPicker() {
    setIsPickerOpen(false);
  }

  const yPosition = calculateModalVerticalPosition();

  return (
    <View style={[GlobalStyles.flexCol, containerStyle]}>
      {label && (
        <Paragraph
          regular
          colorVariant={labelColor}
          p
          title={label}
          style={GlobalStyles.mb5}
        />
      )}

      <View
        style={style}
        ref={containerRef}
        onLayout={() =>
          onLayoutToggle(containerRef, (measure: any) =>
            setContainerMeasure(measure),
          )
        }>
        <PickerToggle<T>
          selected={dataSelected}
          customSelectedItem={customSelectedItem}
          isPickerOpen={isPickerOpen}
          onPickerToggle={setIsPickerOpen}
          containerStyle={toggleContainerStyle}
          textStyle={toggleLabelStyle}
          onLayout={(measure: any) => setToggleMeasure(measure)}
        />
        <Modal visible={isPickerOpen} transparent animationType="fade">
          <View style={GlobalStyles.container}>
            <TouchableOpacity
              style={[GlobalStyles.widthFull, GlobalStyles.container]}
              onPress={dismissPicker}
            />
            <KeyboardAvoidingView
              behavior="position"
              style={[styles.keyboardAvoidingView, { top: yPosition }]}>
              <View style={listContainerStyle ?? styles.listContainer}>
                <FlatList
                  data={data}
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
};

export default DropDown;
