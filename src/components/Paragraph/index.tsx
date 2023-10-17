import React, { useMemo } from 'react';
import { Text, TextProps } from 'react-native';

import { useAppTheme } from '~Root/services/theme/hook';
import styles from './styles';

export enum ColorVariant {
  CONTRAST = 'contrast',
  REV_CONTRAST = 'rev_contrast',
  PRIMARY = 'primary',
  LINK = 'link',
  HINT = 'hint',
  TEXT_FRAME = 'text_frame',
  FRAME = 'frame',
  EXTRA1 = 'extra1',
  EXTRA2 = 'extra2',
  EXTRA3 = 'extra3',
  EXTRA4 = 'extra4',
  EXTRA5 = 'extra5',
}

export interface ParagraphProps extends TextProps {
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  h7?: boolean;
  p?: boolean;
  blackItalic?: boolean;
  black?: boolean;
  extraBoldItalic?: boolean;
  extraBold?: boolean;
  extraLightItalic?: boolean;
  extraLight?: boolean;
  bold?: boolean;
  semiboldItalic?: boolean;
  semibold?: boolean;
  mediumItalic?: boolean;
  medium?: boolean;
  regular?: boolean;
  lightItalic?: boolean;
  light?: boolean;
  thin?: boolean;
  italic?: boolean;
  interBlack?: boolean;
  interExtraBold?: boolean;
  interBold?: boolean;
  interSemibold?: boolean;
  interMedium?: boolean;
  interRegular?: boolean;
  interLight?: boolean;
  interExtraLight?: boolean;
  interThin?: boolean;
  textWhite?: boolean;
  textChineseBlack?: boolean;
  textCenter?: boolean;
  textRight?: boolean;
  textLeft?: boolean;
  title?: string | number | null;
  colorVariant?: ColorVariant;
}

const Paragraph = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h7,
  p,
  blackItalic,
  black,
  extraBoldItalic,
  extraBold,
  extraLightItalic,
  extraLight,
  bold,
  semiboldItalic,
  semibold,
  mediumItalic,
  medium,
  regular,
  lightItalic,
  light,
  thin,
  italic,
  interBlack,
  interExtraBold,
  interBold,
  interSemibold,
  interMedium,
  interRegular,
  interLight,
  interExtraLight,
  interThin,
  textWhite,
  textCenter,
  textRight,
  textLeft,
  title,
  style,
  colorVariant,
  ...rest
}: ParagraphProps) => {
  const { theme } = useAppTheme();

  const textColor = useMemo(() => {
    if (!colorVariant) {
      return theme.contrastColor;
    }

    const colors: Record<ColorVariant, string> = {
      [ColorVariant.CONTRAST]: theme.contrastColor,
      [ColorVariant.REV_CONTRAST]: theme.revContrastColor,
      [ColorVariant.PRIMARY]: theme.primaryColor,
      [ColorVariant.HINT]: theme.text.hintColor,
      [ColorVariant.LINK]: theme.text.linkColor,
      [ColorVariant.TEXT_FRAME]: theme.frameColor,
      [ColorVariant.FRAME]: theme.text.frameColor,
      [ColorVariant.EXTRA1]: theme.extra1Color,
      [ColorVariant.EXTRA2]: theme.extra2Color,
      [ColorVariant.EXTRA3]: theme.extra3Color,
      [ColorVariant.EXTRA4]: theme.extra4Color,
      [ColorVariant.EXTRA5]: theme.extra5Color,
    };

    return colors[colorVariant];
  }, [theme, colorVariant]);

  return (
    <Text
      style={[
        styles.default,
        h1 && styles.h1,
        h2 && styles.h2,
        h3 && styles.h3,
        h4 && styles.h4,
        h5 && styles.h5,
        h6 && styles.h6,
        h7 && styles.h7,
        p && styles.p,
        blackItalic && styles.blackItalic,
        black && styles.black,
        extraBoldItalic && styles.extraBoldItalic,
        extraBold && styles.extraBold,
        semiboldItalic && styles.semiboldItalic,
        semibold && styles.semibold,
        mediumItalic && styles.mediumItalic,
        medium && styles.medium,
        regular && styles.regular,
        lightItalic && styles.lightItalic,
        light && styles.light,
        extraLightItalic && styles.extraLightItalic,
        extraLight && styles.extraLight,
        bold && styles.bold,
        thin && styles.thin,
        interBlack && styles.interBlack,
        interExtraBold && styles.interExtraBold,
        interBold && styles.interBold,
        interSemibold && styles.interSemibold,
        interMedium && styles.interMedium,
        interRegular && styles.interRegular,
        interLight && styles.interLight,
        interExtraLight && styles.interExtraLight,
        interThin && styles.interThin,
        italic && styles.italic,
        textWhite && styles.textWhite,
        textCenter && styles.textCenter,
        textRight && styles.textRight,
        textLeft && styles.textLeft,
        { color: textColor },
        style,
      ]}
      {...rest}>
      {title}
    </Text>
  );
};

export default Paragraph;
