import React, { memo } from 'react';
import { StatusBar, StyleProp, ViewStyle } from 'react-native';
import { GlobalStyles } from '~Root/config';
import { PrimaryView } from '~Root/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Edge } from 'react-native-safe-area-context/lib/typescript/SafeArea.types';

interface SafeAreaLayoutProps {
  containerStyle?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  edges?: Edge[];
}

const SafeAreaLayout = memo(
  ({ containerStyle, children, edges = [] }: SafeAreaLayoutProps) => {
    const mapEdges = new Set<Edge>(['top', 'left', 'right', ...edges]);

    return (
      <PrimaryView style={[GlobalStyles.container, containerStyle]}>
        <SafeAreaView
          edges={Array.from(mapEdges)}
          style={[GlobalStyles.container]}>
          <StatusBar translucent barStyle="light-content" />
          {children}
        </SafeAreaView>
      </PrimaryView>
    );
  },
);

export default SafeAreaLayout;
