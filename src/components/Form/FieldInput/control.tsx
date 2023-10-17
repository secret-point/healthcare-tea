import React from 'react';
import { Controller } from 'react-hook-form';
import FieldInput, { FieldInputProps } from './index';

interface Props extends FieldInputProps {
  defaultValue?: string;
  control?: any;
  name?: string;
  rules?: any;
  register?: any;
  onSwitch?: () => void;
}

const FieldInputControl: React.FC<Props> = ({
  defaultValue = '',
  control = null,
  name = 'text',
  rules = { required: false },
  ...rest
}) => {
  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value, ref }, fieldState }) => {
        return (
          <FieldInput
            ref={ref}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            error={fieldState.error?.message}
            {...rest}
          />
        );
      }}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
    />
  );
};

export default FieldInputControl;
