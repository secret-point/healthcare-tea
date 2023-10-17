/* eslint-disable react-hooks/exhaustive-deps */
import { Pressable, TextInput, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { GlobalStyles } from '~Root/config';

import styles from './styles';
import Paragraph, { ColorVariant } from '../../Paragraph';

type Props = {
  code: any;
  setCode: any;
  maximumLength?: number;
  setIsPinReady: (bool: boolean) => void;
};

const Otp: React.FC<Props> = ({
  code,
  setCode,
  maximumLength = 4,
  setIsPinReady,
}) => {
  const boxArray = new Array(maximumLength).fill(0);
  const inputRef = useRef(null);
  const [isInputBoxFocused, setIsInputBoxFocused] = useState(false);

  const handleOnPress = () => {
    if (inputRef.current) {
      setIsInputBoxFocused(true);
      (inputRef.current as any)?.focus();
    }
  };

  const handleOnBlur = () => {
    setIsInputBoxFocused(false);
  };

  useEffect(() => {
    // update pin ready status
    setIsPinReady(code.length === maximumLength);
    // clean up function
    return () => {
      setIsPinReady(false);
    };
  }, [code]);

  const boxDigit = (_: any, index: number) => {
    const emptyInput = '';
    const digit = code[index] || emptyInput;

    const isCurrentValue = index === code.length;
    const isLastValue = index === maximumLength - 1;
    const isCodeComplete = code.length === maximumLength;

    const isValueFocused = isCurrentValue || (isLastValue && isCodeComplete);

    if (isInputBoxFocused && isValueFocused) {
      return (
        <View style={[GlobalStyles.bgWhite, styles.boxArea]} key={index}>
          <View key={index} style={styles.boxFocus}>
            <Paragraph
              colorVariant={ColorVariant.EXTRA4}
              textCenter
              h4
              title={digit}
            />
          </View>
        </View>
      );
    }

    return (
      <View style={[GlobalStyles.bgWhite, styles.boxArea]} key={index}>
        <View style={styles.box}>
          <Paragraph
            colorVariant={ColorVariant.EXTRA4}
            textCenter
            h4
            title={digit}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={[GlobalStyles.itemsCenter, GlobalStyles.justifyCenter]}>
      <Pressable style={styles.boxContainer} onPress={handleOnPress}>
        {boxArray.map(boxDigit)}
      </Pressable>
      <TextInput
        value={code}
        onChangeText={setCode}
        maxLength={maximumLength}
        ref={inputRef}
        onBlur={handleOnBlur}
        style={styles.input}
      />
    </View>
  );
};

export default Otp;
