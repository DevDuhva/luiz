import { View } from 'react-native';
import Header from "./components/Header";
import styles from "./styles/Estilos";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}
