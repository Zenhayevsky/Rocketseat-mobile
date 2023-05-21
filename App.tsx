import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container} >
      <Text style={styles.text} > Oi Zenha! </Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#060B14',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color:'#fff',
    fontWeight: '700',
    fontSize: 48,

  }
})