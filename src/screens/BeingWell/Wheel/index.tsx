/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useEffect, useMemo, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import * as d3Shape from 'd3-shape';
import randomColor from 'randomcolor';
import Animated, {
  cancelAnimation,
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import { Svg, G, Path, Text, TSpan, TextPath } from 'react-native-svg';
import FastImage from '~Root/components/FastImage';
import { BASE_COLORS, IMAGES } from '~Root/config';
import styles from './styles';

export type WheelItem = {
  label: string;
  value?: string;
  color?: string;
};

type Props = {
  size: number;
  duration?: number;
  items: WheelItem[];
  onFinish?: (item: WheelItem) => void;
};

const SvgAnimated = Animated.createAnimatedComponent(Svg);

const Wheel = memo(({ items, onFinish, size, duration = 10000 }: Props) => {
  const [running, setRunning] = useState(false);
  const numberOfSegments = items.length;

  const rotation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  const startWheel = () => {
    rotation.value = withRepeat(
      withTiming(rotation.value + 360, {
        duration,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
    setRunning(true);
  };

  const stopWheel = () => {
    cancelAnimation(rotation);
    setRunning(false);
  };

  const onToggleWheel = () => {
    if (running) {
      stopWheel();
    } else {
      startWheel();
    }
  };

  const onPressArc = (arc: WheelItem) => () => {
    if (running) {
      stopWheel();
      return;
    }

    if (onFinish) {
      onFinish(arc);
    }
  };

  useEffect(() => {
    startWheel();
  }, []);

  const wheelPaths = useMemo(() => {
    const arcs = d3Shape.pie<WheelItem>().value(_ => 1)(items);

    const colors = randomColor({
      luminosity: 'dark',
      count: numberOfSegments,
    });

    const spaceOuterWidth = 25;
    const outerWidth = size / 2 - spaceOuterWidth;
    const innerOuterWidth = size / 3.5;

    const colorShape = d3Shape
      .arc<d3Shape.PieArcDatum<WheelItem>>()
      .padAngle(0.01)
      .outerRadius(outerWidth)
      .innerRadius(0);

    const outerShape = d3Shape
      .arc<d3Shape.PieArcDatum<WheelItem>>()
      .outerRadius(outerWidth + spaceOuterWidth)
      .innerRadius(outerWidth);

    const innerShape = d3Shape
      .arc<d3Shape.PieArcDatum<WheelItem>>()
      .padAngle(0.01)
      .outerRadius(innerOuterWidth)
      .innerRadius(0);

    return arcs.map((arc, index) => {
      return {
        data: arc.data,
        colorShapePath: colorShape(arc) || undefined,
        innerPath: innerShape(arc) || undefined,
        outerPath: outerShape(arc) || undefined,
        color: colors[index],
      };
    });
  }, [items, numberOfSegments, size]);

  const maxLengthText = useMemo(
    () => size / (numberOfSegments * 2.5),
    [size, numberOfSegments],
  );

  const widthPartCircle = useMemo(
    () => (Math.PI * size) / numberOfSegments,
    [size, numberOfSegments],
  );

  return (
    <View style={styles.wheelContainer}>
      <SvgAnimated
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={[animatedStyle]}>
        <G y={size / 2} x={size / 2}>
          {wheelPaths.map((arc, i) => (
            <G key={`arc-${i}`} onPress={onPressArc(arc.data)}>
              <Path d={arc.colorShapePath} fill={arc.color} />
              <Path d={arc.innerPath} fill={BASE_COLORS.whiteColor} />
              <G id={`path${i}`}>
                <Path d={arc.outerPath} fill={BASE_COLORS.whiteColor} />
              </G>
              <Text
                fill={BASE_COLORS.blackColor}
                fontSize="11"
                textAnchor="middle">
                <TextPath href={`#path${i}`}>
                  <TSpan dy={17} dx={widthPartCircle / 2}>
                    {arc.data.label.substring(0, maxLengthText)}
                  </TSpan>
                </TextPath>
              </Text>
            </G>
          ))}
        </G>
      </SvgAnimated>
      <TouchableOpacity
        style={styles.wheelButtonContainer}
        onPress={onToggleWheel}>
        <FastImage
          source={IMAGES.iconWheel}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.wheelButton}
        />
      </TouchableOpacity>
    </View>
  );
});

export default Wheel;
