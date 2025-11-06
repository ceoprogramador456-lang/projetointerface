import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome5, AntDesign } from '@expo/vector-icons';

import TelaInicial from './components/TelaInicial';
import TelaCatalogo from './components/TelaCatalogo';
import TelaContato from './components/TelaContato';

const Abas = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Abas.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#400303' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          tabBarStyle: { backgroundColor: '#400303' },
          tabBarActiveTintColor: '#fff',
          tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
        }}
      >
        <Abas.Screen
          name="Início"
          component={TelaInicial}
          options={{
            tabBarIcon: ({ color }) => <Entypo name="home" color={color} size={20} />,
          }}
        />

        <Abas.Screen
          name="Catálogo"
          component={TelaCatalogo}
          options={{
            tabBarIcon: ({ color }) => <FontAwesome5 name="wine-bottle" color={color} size={20} />,
          }}
        />

        <Abas.Screen
          name="Contato"
          component={TelaContato}
          options={{
            tabBarIcon: ({ color }) => <AntDesign name="contacts" color={color} size={20} />,
          }}
        />
      </Abas.Navigator>
    </NavigationContainer>
  );
}
