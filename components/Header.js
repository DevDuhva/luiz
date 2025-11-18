import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/Estilos';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ onMenuPress, onSearch }) {
  return (
    <View style={styles.navbar}>

      {/* Botão Hamburguer */}
      <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
        <Ionicons name="menu-outline" size={43} color="#dbdbdbff" />
      </TouchableOpacity>

      {/* Barra de Pesquisa */}
      <TextInput
        placeholder="Buscar produtos..."
        placeholderTextColor="#4b4b4bff"
        style={styles.navbarSearch}
        onChangeText={onSearch}
      />

    </View>
  );
}
