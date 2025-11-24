import React, { useState } from "react";
import { View, Text, Animated, TouchableOpacity, Dimensions, ScrollView, Image, StyleSheet } from "react-native";
import Header from "./Header";
import { useNavigation } from "@react-navigation/native";


export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');

  const screenWidth = Dimensions.get("window").width;
  const menuX = useState(new Animated.Value(-screenWidth))[0];
  const navigation = useNavigation();


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

  const products = [
    {
      nome: 'Placa de Ferro',
      caminho: require('../assets/ferro.png'),
      preco: 'R$ 120,00',
      info: 'Placa de ferro resistente, ideal para construção e projetos.'
    },
    {
      nome: 'Tábua de Madeira',
      caminho: require('../assets/madeira.jpg'),
      preco: 'R$ 85,00',
      info: 'Madeira de alta qualidade, acabamento perfeito para móveis.'
    }
  ];

  const imagensFiltradas = products.filter(p => p.nome.toLowerCase().includes(query.toLowerCase()));

  function handleSearch(text) {
    setQuery(text);
  }

  return (
    <View style={{ flex: 1 }}>
      {/* HEADER COM O BOTÃO HAMBURGUER */}
      <Header onMenuPress={toggleMenu} onSearch={handleSearch} />

      {/* MENU LATERAL */}
      {menuOpen && (
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 1,
          }}
          activeOpacity={1}
          onPress={toggleMenu}
        />
      )}

      <Animated.View
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: screenWidth * 0.7,
          height: "100%",
          backgroundColor: "#fff",
          paddingTop: 50,
          paddingHorizontal: 20,
          transform: [{ translateX: menuX }],
          elevation: 10,
          zIndex: 2,
        }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold", marginBottom: 20 }}>
          Menu
        </Text>
      <TouchableOpacity onPress={() => { toggleMenu(); navigation.navigate("Conta"); }}>
        <Text style={{ fontSize: 18, marginVertical: 10 }}>Conta</Text>

        </TouchableOpacity>

       <TouchableOpacity onPress={() => { toggleMenu(); navigation.navigate("AddProduto"); }}>
        <Text style={{ fontSize: 18, marginVertical: 10 }}>Add Produto</Text>
        </TouchableOpacity>
      </Animated.View>

      {/* CONTEÚDO DA HOME */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.pageTitle}>Produtos em Destaque</Text>

       
        <View style={styles.productsRow}>
          {imagensFiltradas.length === 0 ? (
            <Text style={{ textAlign: 'center', width: '100%', marginTop: 20 }}>Nenhum produto encontrado.</Text>
          ) : (
            imagensFiltradas.map((p, i) => (
              <TouchableOpacity
                key={i}
                style={styles.card}
                onPress={() => navigation.navigate('ProdutoDetalhe', { produto: p })}
              >
                <Image source={p.caminho} style={styles.cardImage} resizeMode="cover" />
                <Text style={styles.cardTitle}>{p.nome}</Text>
                <Text style={styles.cardPrice}>{p.preco}</Text>
                <Text style={styles.cardDesc}>{p.info}</Text>
              </TouchableOpacity>
            ))
          )}
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { padding: 20, paddingTop: 10 },
  pageTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  productsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  card: { width: '48%', backgroundColor: '#fff', borderRadius: 8, padding: 10, elevation: 2 },
  cardImage: { width: '100%', height: 120, borderRadius: 6, marginBottom: 8 },
  cardTitle: { fontSize: 16, fontWeight: '600' },
  cardPrice: { fontSize: 14, color: '#007bff', marginVertical: 6 },
  cardDesc: { fontSize: 13, color: '#444' },
});
