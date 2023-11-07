import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CreateToDo from './src/components/CreateToDo/CreateToDo';
export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      
      
      
      <CreateToDo />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});
