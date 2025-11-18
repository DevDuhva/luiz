import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import Header from "./components/Header";
import Perfil from "./components/Perfil";
import styles from "./styles/Estilos";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
       
      >
        {/* ---------- SOMENTE O PERFIL NO MENU ---------- */}
        <Drawer.Screen
          name="Perfil"
          component={Perfil}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name="person-circle-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />


        <Drawer.Screen
          name="header"
          component={Header}
          options={{
            drawerIcon: ({ color, size }) => (
              <Ionicons
                name="person-circle-outline"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Drawer.Navigator>

    
      
      
    </NavigationContainer>
  );
}
