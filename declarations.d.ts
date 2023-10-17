declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';

  type AppSvgProps = SvgProps & {
    primaryColor?: string;
    secondaryColor?: string;
  };

  const content: React.FC<AppSvgProps>;

  export { AppSvgProps };

  export default content;
}
