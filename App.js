import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5, AntDesign } from "@expo/vector-icons";

// Telas
import TelaInicial from "./components/TelaInicial";
import TelaCatalogo from "./components/TelaCatalogo";
import TelaContato from "./components/TelaContato";

const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#400303",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",

          tabBarStyle: {
            backgroundColor: "#400303",
          },
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#d8cfcf",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold",
          },
        }}
      >
        <Abas.Screen
          name="Início"
          component={TelaInicial}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" color={color} size={size} />
            ),
          }}
        />

        <Abas.Screen
          name="Catálogo"
          component={TelaCatalogo}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="wine-bottle" color={color} size={size} />
            ),
          }}
        />

        <Abas.Screen
          name="Contato"
          component={TelaContato}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="contacts" color={color} size={size} />
            ),
          }}
        />
      </Abas.Navigator>
    </NavigationContainer>
  );
}
