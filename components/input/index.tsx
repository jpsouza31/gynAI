import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';

interface inputProps {
  title: string;
  placeholder: string;
  value: string;
  onChangeText: (value: string) => void;
  multiline?: boolean;
  numeric?: boolean;
}

export default function Input({
  multiline,
  title,
  placeholder,
  numeric,
  value,
  onChangeText,
}: inputProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        multiline={multiline}
        style={[styles.input, multiline && styles.inputMultiline]}
        placeholder={placeholder}
        placeholderTextColor="#999"
        textAlignVertical={multiline ? 'top' : 'center'}
        keyboardType={numeric ? 'numeric' : 'default'}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
