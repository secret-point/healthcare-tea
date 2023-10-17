import React, { memo, ReactElement } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Extra6View, Paragraph } from '~Root/components';
import { GlobalStyles } from '~Root/config';
import { ColorVariant } from '~Root/components/Paragraph';

interface NoteToolBoxProps {
  containerStyle?: StyleProp<ViewStyle>;
  boxStyle?: StyleProp<ViewStyle>;
  label?: string | null;
  labelColor?: ColorVariant;
  note?: string;
  children?: ReactElement | ReactElement[];
}

const NoteToolBox = memo(
  ({
    containerStyle,
    boxStyle,
    label,
    labelColor = ColorVariant.EXTRA2,
    note,
    children,
  }: NoteToolBoxProps) => {
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
        <Extra6View
          style={[
            GlobalStyles.rounded8,
            GlobalStyles.flexRow,
            GlobalStyles.p10,
            GlobalStyles.ph11,
            boxStyle,
          ]}>
          {note && (
            <Paragraph
              colorVariant={ColorVariant.REV_CONTRAST}
              semibold
              h5
              title={note}
              style={GlobalStyles.flexShrink1}
            />
          )}
          {children}
        </Extra6View>
      </View>
    );
  },
);

export default NoteToolBox;
