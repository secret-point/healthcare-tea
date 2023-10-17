import React, { memo } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Extra6View, Paragraph } from '~Root/components';
import { GlobalStyles } from '~Root/config';
import FastImage from '~Root/components/FastImage';
import styles from './styles';
import { ColorVariant } from '~Root/components/Paragraph';
import { useTranslation } from 'react-i18next';

interface UserToolBoxProps {
  containerStyle?: StyleProp<ViewStyle>;
  boxStyle?: StyleProp<ViewStyle>;
  label?: string | null;
  labelColor?: ColorVariant;
  avatar?: string;
  name?: string;
  major?: string;
  description?: string;
  price?: string;
  onPressUser?: () => void;
}

const UserToolBox = memo(
  ({
    containerStyle,
    boxStyle,
    label,
    labelColor = ColorVariant.EXTRA2,
    avatar,
    name,
    major,
    description,
    price,
    onPressUser,
  }: UserToolBoxProps) => {
    const { t } = useTranslation();
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
        <TouchableOpacity onPress={onPressUser}>
          <Extra6View
            style={[
              GlobalStyles.rounded8,
              GlobalStyles.flexRow,
              GlobalStyles.ph8,
              GlobalStyles.pv10,
              GlobalStyles.gap15,
              GlobalStyles.relative,
              boxStyle,
            ]}>
            <FastImage
              source={{ uri: avatar }}
              resizeMode={FastImage.resizeMode.cover}
              style={styles.userToolBoxAvatar}
            />
            <View style={[GlobalStyles.rowGap3, GlobalStyles.flexShrink1]}>
              {name && (
                <Paragraph
                  colorVariant={ColorVariant.REV_CONTRAST}
                  bold
                  h5
                  title={name}
                  numberOfLines={2}
                  style={price ? styles.name : {}}
                />
              )}
              {major && (
                <Paragraph
                  colorVariant={ColorVariant.PRIMARY}
                  medium
                  h5
                  title={major}
                  numberOfLines={1}
                />
              )}
              {description && (
                <Paragraph
                  colorVariant={ColorVariant.REV_CONTRAST}
                  regular
                  h5
                  title={description}
                />
              )}
            </View>
            {price && (
              <Paragraph
                colorVariant={ColorVariant.EXTRA4}
                semibold
                p
                title={t('per_h', { price })}
                style={styles.price}
              />
            )}
          </Extra6View>
        </TouchableOpacity>
      </View>
    );
  },
);

export default UserToolBox;
