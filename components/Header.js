import { View, TextInput, TouchableOpacity, Text } from "react-native";
import styles from "../styles/Estilos"; 

  export default function Header({ onMenuPress, onSearch, showSearch = true }) {
  return (
    <View style={styles.navbar}>
      {/* Botão Hamburguer */}
      <TouchableOpacity onPress={onMenuPress}>
        <Text style={styles.hamburger}>☰</Text>
      </TouchableOpacity>

      {/* Barra de Pesquisa (opcional) */}
      {showSearch && (
        <TextInput
          placeholder="Buscar produtos..."
          placeholderTextColor="#4b4b4bff"
          style={styles.navbarSearch}
          onChangeText={onSearch}
        />
      )}
    </View>
  );
}
