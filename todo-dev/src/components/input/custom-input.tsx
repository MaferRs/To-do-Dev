import React from 'react';
import { TextInput, View, Text, TextInputProps } from 'react-native';

import { styles } from './styles';

interface Props extends TextInputProps {
  label?: string;
  value: string;
  type?: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
}

export default function CustomInput({
  label,
  value,
  type,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  ...props
}: Props) {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        {...props}
      />
    </View>
  );
}
