import React from 'react';
import { TouchableOpacity } from 'react-native';
import Paragraph, { ColorVariant, ParagraphProps } from '../Paragraph';

interface Props extends ParagraphProps {
  colorVariant?: ColorVariant;
  onPress?: any;
}

const Link: React.FC<Props> = ({
  numberOfLines = undefined,
  onPress,
  ...rest
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Paragraph numberOfLines={numberOfLines} {...rest} />
    </TouchableOpacity>
  );
};

export default Link;
