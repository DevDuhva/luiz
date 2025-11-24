import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Animated, Dimensions } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import Header from "./Header";
import { useNavigation } from '@react-navigation/native';

export default function AddProduto() {
  const [foto, setFoto] = useState(null);
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const screenWidth = Dimensions.get("window").width;
  const menuX = useState(new Animated.Value(-screenWidth))[0];
  const navigation = useNavigation();

  function escolherFoto() {
    launchImageLibrary({ mediaType: "photo" }, (res) => {
      if (!res.didCancel && !res.errorMessage) {
        setFoto(res.assets[0].uri);
      }
    });
  }

  function salvar() {
    console.log("Produto salvo:");
    console.log("Nome:", nome);
    console.log("Preço:", preco);
    console.log("Foto:", foto);
    alert("Produto salvo!");
  }

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
      <Header onMenuPress={toggleMenu} />

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
       
        <TouchableOpacity onPress={() => { toggleMenu(); navigation.navigate("Home"); }}>
          <Text style={{ fontSize: 18, marginVertical: 10 }}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => { toggleMenu(); navigation.navigate("Conta"); }}>
          <Text style={{ fontSize: 18, marginVertical: 10 }}>Conta</Text>
        </TouchableOpacity>
      </Animated.View>

      <Text style={styles.titulo}>Adicionar Produto</Text>

      <TouchableOpacity style={styles.fotoBox} onPress={escolherFoto}>
        {foto ? (
          <Image source={{ uri: foto }} style={styles.foto} />
        ) : (
          <Text>Selecionar Foto</Text>
        )}
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Nome do Produto"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={preco}
        onChangeText={setPreco}
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.botao} onPress={salvar}>
        <Text style={{ color: "#fff", fontSize: 18 }}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fafafa" },
  titulo: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 20 },
  fotoBox: {
    width: 150,
    height: 150,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginBottom: 20,
  },
  foto: { width: "100%", height: "100%" },
  input: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  botao: {
    backgroundColor: "#007bff",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
});
