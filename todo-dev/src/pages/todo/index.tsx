import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { styles } from './styles';

export default function Todo() {
  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Bem Vinda, Ana F.</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.containerTodo}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.contentTodo}>
          <Text>KATCHAU</Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    </KeyboardAvoidingView>
  );
}
