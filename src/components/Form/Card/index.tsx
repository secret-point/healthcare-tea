import React, { ReactElement } from 'react';
import {
  StyleProp,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';

import { GlobalStyles } from '~Root/config/styles';
import { ColorVariant, Extra6View, Paragraph } from '~Root/components';
import styles from './styles';

type FormCardItemProps = {
  label?: string | null;
  inputProps?: TextInputProps;
  containerStyle?: StyleProp<ViewStyle>;
};

export const FormCardItem = ({
  label,
  inputProps,
  containerStyle,
}: FormCardItemProps) => {
  return (
    <View style={[GlobalStyles.container, containerStyle]}>
      {label && (
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.itemsCenter,
            GlobalStyles.justifyBetween,
            GlobalStyles.mb5,
          ]}>
          <Paragraph
            p
            regular
            colorVariant={ColorVariant.REV_CONTRAST}
            title={label}
          />
        </View>
      )}
      <TextInput style={styles.cardTextInput} {...inputProps} />
    </View>
  );
};

type FormCardContainerProps = {
  label?: string | null;
  children?: ReactElement | ReactElement[];
  containerStyle?: StyleProp<ViewStyle>;
};

export const FormCardContainer = ({
  label,
  children,
  containerStyle,
}: FormCardContainerProps) => {
  return (
    <View style={[GlobalStyles.container, containerStyle]}>
      {label && (
        <View
          style={[
            GlobalStyles.flexRow,
            GlobalStyles.itemsCenter,
            GlobalStyles.justifyBetween,
            GlobalStyles.mb5,
          ]}>
          <Paragraph p colorVariant={ColorVariant.CONTRAST} title={label} />
        </View>
      )}
      <Extra6View style={styles.cardFormInput}>{children}</Extra6View>
    </View>
  );
};
