import React, { ReactNode } from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  children: ReactNode;
  color?: string;
}

export default function CustomButton({
  children,
  onPress,
  color = '#ADCEB7',
  ...props
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
}
