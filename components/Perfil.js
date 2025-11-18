import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Perfil() {
  return (
    <View style={{ flex: 1, backgroundColor: "#1b1b1b", padding: 20 }}>

      {/* Foto */}
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Image
          source={{ uri: "https://i.pravatar.cc/300" }}
          style={{
            width: 120,
            height: 120,
            borderRadius: 100,
            borderWidth: 3,
            borderColor: "#4caf50"
          }}
        />

        {/* Nome */}
        <Text style={{ color: "#fff", fontSize: 24, fontWeight: "bold", marginTop: 15 }}>
          João da Silva
        </Text>

        {/* Email */}
        <Text style={{ color: "#bbb", fontSize: 16 }}>
          joao.silva@example.com
        </Text>

        {/* Botão editar perfil */}
        <TouchableOpacity
          style={{
            marginTop: 15,
            backgroundColor: "#4caf50",
            paddingVertical: 10,
            paddingHorizontal: 30,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
            Editar Perfil
          </Text>
        </TouchableOpacity>
      </View>

      {/* Info extra */}
      <View style={{ marginTop: 35 }}>
        <Text style={{ color: "#fff", fontSize: 20, marginBottom: 15 }}>
          Informações
        </Text>

        <View style={{ flexDirection: "row", marginBottom: 20, alignItems: "center" }}>
          <Ionicons name="call-outline" size={24} color="#4caf50" />
          <Text style={{ color: "#fff", fontSize: 16, marginLeft: 10 }}>
            (14) 99999-8888
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginBottom: 20, alignItems: "center" }}>
          <Ionicons name="location-outline" size={24} color="#4caf50" />
          <Text style={{ color: "#fff", fontSize: 16, marginLeft: 10 }}>
            Agudos - SP
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginBottom: 20, alignItems: "center" }}>
          <Ionicons name="calendar-outline" size={24} color="#4caf50" />
          <Text style={{ color: "#fff", fontSize: 16, marginLeft: 10 }}>
            Conta criada em: 12/03/2024
          </Text>
        </View>
      </View>
    </View>
  );
}
