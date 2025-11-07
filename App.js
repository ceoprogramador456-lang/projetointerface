<<<<<<< HEAD
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, FontAwesome5, AntDesign } from "@expo/vector-icons";

// Telas
import TelaInicial from "./components/TelaInicial";
import TelaCatalogo from "./components/TelaCatalogo";
import TelaContato from "./components/TelaContato";
=======
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome5, AntDesign } from '@expo/vector-icons';

import TelaInicial from './components/TelaInicial';
import TelaCatalogo from './components/TelaCatalogo';
import TelaContato from './components/TelaContato';
>>>>>>> a0301a9462819a23612cb283bb42d5486ceeeae8

const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator
        screenOptions={{
<<<<<<< HEAD
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
=======
          headerStyle: { backgroundColor: '#400303' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: '#400303' },
          tabBarActiveTintColor: '#fff',
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
>>>>>>> a0301a9462819a23612cb283bb42d5486ceeeae8
        }}
      >
        <Abas.Screen
          name="Início"
          component={TelaInicial}
          options={{
<<<<<<< HEAD
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" color={color} size={size} />
            ),
=======
            tabBarIcon: ({ color }) => <Entypo name="home" color={color} size={20} />,
>>>>>>> a0301a9462819a23612cb283bb42d5486ceeeae8
          }}
        />

        <Abas.Screen
          name="Catálogo"
          component={TelaCatalogo}
          options={{
<<<<<<< HEAD
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="wine-bottle" color={color} size={size} />
            ),
=======
            tabBarIcon: ({ color }) => <FontAwesome5 name="wine-bottle" color={color} size={20} />,
>>>>>>> a0301a9462819a23612cb283bb42d5486ceeeae8
          }}
        />

        <Abas.Screen
          name="Contato"
          component={TelaContato}
          options={{
<<<<<<< HEAD
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="contacts" color={color} size={size} />
            ),
=======
            tabBarIcon: ({ color }) => <AntDesign name="contacts" color={color} size={20} />,
>>>>>>> a0301a9462819a23612cb283bb42d5486ceeeae8
          }}
        />
      </Abas.Navigator>
    </NavigationContainer>
  );
}
