import React, { memo, ReactElement } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { GlobalStyles } from '~Root/config';
import { Link, Paragraph } from '~Root/components';
import { ColorVariant } from '~Root/components/Paragraph';

type SectionHeadingProps = {
  title?: string | null;
  subTitle?: string | null;
  linkText?: string | null;
  LinkComponent?: ReactElement | null;
  onPressTitle?: () => void;
  onPressLink?: () => void;
  containerStyles?: StyleProp<ViewStyle>;
};

const SectionHeading = memo(
  ({
    title,
    subTitle,
    linkText,
    LinkComponent,
    onPressTitle,
    onPressLink,
    containerStyles,
  }: SectionHeadingProps) => {
    return (
      <View
        style={[
          GlobalStyles.flexRow,
          GlobalStyles.justifyBetween,
          GlobalStyles.itemsCenter,
          GlobalStyles.mb10,
          containerStyles,
        ]}>
        <TouchableOpacity onPress={onPressTitle}>
          {title ? (
            <Paragraph
              colorVariant={ColorVariant.CONTRAST}
              semibold
              h5
              title={title}
            />
          ) : subTitle ? (
            <Paragraph
              colorVariant={ColorVariant.CONTRAST}
              medium
              p
              title={subTitle}
            />
          ) : null}
        </TouchableOpacity>
        {linkText && (
          <Link
            colorVariant={ColorVariant.LINK}
            medium
            p
            title={linkText}
            onPress={onPressLink}
          />
        )}
        {LinkComponent}
      </View>
    );
  },
);

export default SectionHeading;
