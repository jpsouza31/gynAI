import { Picker } from '@react-native-picker/picker';
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

interface IOptionsProps {
  label: string;
  value: string;
}

interface IInputProps {
  title: string;
  onSelectValue: (value: string) => void;
  selectedValue: string;
  options: IOptionsProps[];
}

export default function PickerInput({ title, onSelectValue, selectedValue, options }: IInputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedValue}
          onValueChange={(value) => onSelectValue(value)}
          style={styles.picker}
        >
          {options.map((option) => (
            <Picker.Item key={option.value} label={option.label} value={option.value} />
          ))}
        </Picker>
      </View>
    </View>
  );
}
