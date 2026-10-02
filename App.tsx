import { Alert, Button, StyleSheet, Text, View } from 'react-native';
 
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.judul}>Halo, Expo!</Text>
      <Text>Ini aplikasi pertama saya.</Text>
      <Button
  title="Tekan Saya"
  onPress={() => Alert.alert('Halo!', 'Tombol berhasil ditekan')}
/>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  judul: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});