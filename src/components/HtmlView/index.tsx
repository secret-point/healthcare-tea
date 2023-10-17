import React, { memo, useCallback } from 'react';
import HTML, {
  RenderHTMLProps,
  defaultSystemFonts,
} from 'react-native-render-html';
import { MixedStyleDeclaration } from '@native-html/css-processor/src/CSSProcessor';
import { useWindowDimensions } from 'react-native';
import { MixedStyleRecord } from '@native-html/transient-render-engine';
import { BASE_FONTS, BASE_STYLES } from '~Root/config';
import { ITheme } from '~Root/services/theme/types';
import { useAppTheme } from '~Root/services/theme/hook';
import adjust from '~Root/utils/adjust';

const _generateHeadingStyle = (
  theme: ITheme,
  baseFontSize: number,
  fontMultiplier: number,
  marginMultiplier: number,
): MixedStyleDeclaration => ({
  fontFamily: BASE_FONTS.bold,
  fontSize: baseFontSize * fontMultiplier,
  marginTop: 0,
  marginBottom: baseFontSize * fontMultiplier * marginMultiplier,
  fontWeight: 'bold',
});

const generateTagStyles = (
  theme: ITheme,
  baseFontSize: number,
): MixedStyleRecord => {
  return {
    // Block
    ul: {
      paddingLeft: 20,
      marginBottom: baseFontSize,
    },
    ol: {
      paddingLeft: 20,
      marginBottom: baseFontSize,
    },
    iframe: {
      height: 200,
    },
    hr: {
      marginTop: baseFontSize / 2,
      marginBottom: baseFontSize / 2,
      height: 1,
      backgroundColor: theme.borderColor,
    },
    // Text Styles
    u: {
      textDecorationLine: 'underline',
    },
    em: {
      fontFamily: BASE_FONTS.mediumItalic,
      fontStyle: 'italic',
    },
    i: {
      fontFamily: BASE_FONTS.mediumItalic,
      fontStyle: 'italic',
    },
    b: {
      fontFamily: BASE_FONTS.bold,
      fontWeight: 'bold',
    },
    s: {
      textDecorationLine: 'line-through',
    },
    strong: {
      fontFamily: BASE_FONTS.bold,
      fontWeight: 'bold',
    },
    big: {
      fontSize: baseFontSize * 1.2,
    },
    small: {
      fontSize: baseFontSize * 0.8,
    },
    a: {
      margin: 0,
      color: theme.text.linkColor,
      fontSize: baseFontSize,
      textDecorationLine: 'underline',
    },
    h1: _generateHeadingStyle(theme, baseFontSize, 2, 0.67),
    h2: _generateHeadingStyle(theme, baseFontSize, 1.5, 0.83),
    h3: _generateHeadingStyle(theme, baseFontSize, 1.17, 1),
    h4: _generateHeadingStyle(theme, baseFontSize, 1, 1.33),
    h5: _generateHeadingStyle(theme, baseFontSize, 0.83, 1.67),
    h6: _generateHeadingStyle(theme, baseFontSize, 0.67, 2.33),
    sub: {
      color: theme.text.linkColor,
      fontSize: baseFontSize * 0.8,
    },
    sup: {
      color: theme.text.linkColor,
      fontSize: baseFontSize * 0.8,
    },
    p: {
      marginTop: 0,
      marginBottom: baseFontSize,
      fontSize: baseFontSize,
    },
  };
};

const systemFonts = [
  ...defaultSystemFonts,
  BASE_FONTS.medium,
  BASE_FONTS.mediumItalic,
  BASE_FONTS.bold,
];

interface HtmlViewProps extends Omit<RenderHTMLProps, 'source'> {
  html: string;
  paddingHorizontal?: number;
}

const HtmlView = memo(
  ({ html, paddingHorizontal = adjust(15), ...rest }: HtmlViewProps) => {
    const { width } = useWindowDimensions();
    const { theme } = useAppTheme();

    const computeEmbeddedMaxWidth = useCallback(
      (availableWidth: number) => {
        return Math.min(availableWidth - paddingHorizontal, availableWidth);
      },
      [paddingHorizontal],
    );

    return (
      <HTML
        source={{ html }}
        systemFonts={systemFonts}
        tagsStyles={generateTagStyles(theme, BASE_STYLES.h4)}
        contentWidth={width - paddingHorizontal}
        computeEmbeddedMaxWidth={computeEmbeddedMaxWidth}
        baseStyle={{
          fontFamily: BASE_FONTS.medium,
          color: theme.contrastColor,
        }}
        {...rest}
      />
    );
  },
);

export default HtmlView;
