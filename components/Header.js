import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../styles/Estilos';
import { Ionicons } from '@expo/vector-icons';

export default function Header({ onMenuPress, onSearch, showSearch = true }) {
  return (
    <View style={styles.navbar}>
      {/* Botão Hamburguer */}
      <TouchableOpacity onPress={onMenuPress} style={styles.menuButton}>
        <Ionicons name="menu-outline" size={32} color="#fff" />
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
