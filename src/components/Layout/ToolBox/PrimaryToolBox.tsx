import React, { memo } from 'react';
import { GlobalStyles, IMAGES } from '~Root/config';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { ColorVariant, Image, Paragraph } from '~Root/components';
import { useAppTheme } from '~Root/services/theme/hook';

interface PrimaryToolBoxProps {
  containerStyle?: StyleProp<ViewStyle>;
  title?: string;
  description?: string;
  onNextPress?: () => void;
  children?: React.ReactNode;
}

const PrimaryToolBox = memo(
  ({
    containerStyle,
    title,
    description,
    onNextPress,
    children,
  }: PrimaryToolBoxProps) => {
    const { globalStyles } = useAppTheme(true);
    return (
      <TouchableOpacity
        onPress={onNextPress}
        style={[
          globalStyles.bgExtra1,
          GlobalStyles.rounded,
          GlobalStyles.p10,
          GlobalStyles.flexRow,
          GlobalStyles.itemsCenter,
          GlobalStyles.justifyBetween,
          containerStyle,
        ]}>
        <View
          style={[
            GlobalStyles.flexCol,
            GlobalStyles.flexShrink1,
            GlobalStyles.mr5,
            GlobalStyles.rowGap3,
          ]}>
          {children}
          {title && (
            <Paragraph
              colorVariant={ColorVariant.TEXT_FRAME}
              bold
              h6
              title={title}
            />
          )}
          {description && (
            <Paragraph
              colorVariant={ColorVariant.TEXT_FRAME}
              medium
              title={description}
              style={GlobalStyles.font9}
            />
          )}
        </View>
        {onNextPress && (
          <TouchableOpacity
            onPress={onNextPress}
            style={[
              GlobalStyles.icon40x40,
              GlobalStyles.bgWhite,
              GlobalStyles.rounded,
              GlobalStyles.itemsCenter,
              GlobalStyles.justifyCenter,
            ]}>
            <Image
              source={IMAGES.iconBackGrey24x24}
              resizeMode="cover"
              style={[GlobalStyles.icon24x24]}
            />
          </TouchableOpacity>
        )}
      </TouchableOpacity>
    );
  },
);

export default PrimaryToolBox;
