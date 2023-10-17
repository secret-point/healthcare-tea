import React, { memo, ReactElement } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import { AppSvgProps } from '*.svg';

import styles from './styles';
import { GlobalStyles } from '~Root/config';
import { Paragraph, ColorVariant } from '~Root/components';
import { useAppTheme } from '~Root/services/theme/hook';

type SectionItemProps = {
  onPress?: () => void;
  color: string;
  title: string;
  IconComponent?: React.FC<AppSvgProps>;
  containerStyle?: StyleProp<ViewStyle>;
};

export const SectionItem = memo(
  ({
    onPress,
    color,
    title,
    IconComponent,
    containerStyle,
  }: SectionItemProps) => {
    return (
      <TouchableOpacity
        style={[styles.sectionItem, containerStyle]}
        onPress={onPress}>
        {IconComponent && (
          <View style={styles.sectionIcon}>
            <IconComponent primaryColor={color} width={22} height={22} />
          </View>
        )}
        <Paragraph
          h5
          medium
          title={title}
          numberOfLines={1}
          colorVariant={ColorVariant.TEXT_FRAME}
          style={[GlobalStyles.flexShrink1, GlobalStyles.container]}
        />
        <Icon name="chevron-forward-outline" color={color} size={26} />
      </TouchableOpacity>
    );
  },
);

type SectionWrapProps = {
  children?: ReactElement | ReactElement[];
  containerStyle?: StyleProp<ViewStyle>;
};

export const SectionWrap = memo(
  ({ children, containerStyle }: SectionWrapProps) => {
    const { globalStyles } = useAppTheme(true);

    return (
      <View style={[globalStyles.bgExtra3, styles.section, containerStyle]}>
        {children}
      </View>
    );
  },
);
