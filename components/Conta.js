import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../styles/Conta_estilos';
import Header from './Header';
import { useNavigation } from '@react-navigation/native';

export default function Conta() {
  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const menuX = useState(new Animated.Value(-screenWidth))[0];

  function toggleMenu() {
    if (menuOpen) {
      Animated.timing(menuX, {
        toValue: -screenWidth,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuOpen(false));
    } else {
      setMenuOpen(true);
      Animated.timing(menuX, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }

  return (
    <View style={styles.container}>
      <Header onMenuPress={toggleMenu} showSearch={false} />

      {/* Informações do usuário */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/150' }}
          style={styles.profileImage}
        />

        <Text style={styles.profileName}>Usuário</Text>
        <Text style={styles.profileEmail}>email@exemplo.com</Text>

        {/* Avaliação */}
        <View style={styles.starsContainer}>
          <Ionicons name="star" size={22} color="#FFD700" />
          <Ionicons name="star" size={22} color="#FFD700" />
          <Ionicons name="star" size={22} color="#FFD700" />
          <Ionicons name="star" size={22} color="#FFD700" />
          <Ionicons name="star-outline" size={22} color="#FFD700" />
        </View>

        <Text style={styles.ratingText}>4.0 de 5.0</Text>
      </View>

      {/* Opções */}
      <View style={styles.menu}>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="person-circle-outline" size={24} color="#333" />
          <Text style={styles.menuText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="lock-closed-outline" size={24} color="#333" />
          <Text style={styles.menuText}>Alterar Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="settings-outline" size={24} color="#333" />
          <Text style={styles.menuText}>Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Ionicons name="help-circle-outline" size={24} color="#333" />
          <Text style={styles.menuText}>Ajuda</Text>
        </TouchableOpacity>

      </View>

      {/* Sair */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.goBack()}>
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

      {/* MENU LATERAL (hamburguer) */}
      {menuOpen && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 1,
          }}
          activeOpacity={1}
          onPress={toggleMenu}
        />
      )}

      <Animated.View
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: screenWidth * 0.7,
          height: '100%',
          backgroundColor: '#fff',
          paddingTop: 50,
          paddingHorizontal: 20,
          transform: [{ translateX: menuX }],
          elevation: 10,
          zIndex: 2,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>
          Menu
        </Text>
        {/* List all main screens in the project */}
        <TouchableOpacity onPress={() => { toggleMenu(); navigation.navigate('Home'); }}>
          <Text style={{ fontSize: 18, marginVertical: 10 }}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { toggleMenu(); navigation.navigate('AddProduto'); }}>
          <Text style={{ fontSize: 18, marginVertical: 10 }}>Add Produto</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { toggleMenu(); navigation.navigate('Conta'); }}>
          <Text style={{ fontSize: 18, marginVertical: 10 }}>Conta</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { toggleMenu(); navigation.navigate('Login'); }}>
          <Text style={{ fontSize: 18, marginVertical: 10 }}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { toggleMenu(); }}>
          <Text style={{ fontSize: 18, marginVertical: 10 }}>Fechar</Text>
        </TouchableOpacity>
      </Animated.View>

    </View>
  );
}
