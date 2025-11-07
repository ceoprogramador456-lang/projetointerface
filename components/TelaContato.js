import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign, Entypo, FontAwesome } from "@expo/vector-icons";

export default function TelaContato() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Entre em contato conosco para comprar nossos produtos</Text>

      <View style={styles.card}>
        <AntDesign name="phone" size={28} color="#400303" />
        <View style={styles.textContainer}>
          <Text style={styles.label}>Telefone:</Text>
          <Text style={styles.text}>+55 21 000000000</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Entypo name="location-pin" size={28} color="#400303" />
        <View style={styles.textContainer}>
          <Text style={styles.label}>Endereço:</Text>
          <Text style={styles.text}>Av. 123, 222 - Rio de Janeiro RJ</Text>
        </View>
      </View>

      <View style={styles.card}>
        <Entypo name="mail" size={28} color="#400303" />
        <View style={styles.textContainer}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.text}>preferida@adega.com.br</Text>
        </View>
      </View>

      <View style={styles.card}>
        <FontAwesome name="instagram" size={28} color="#400303" />
        <View style={styles.textContainer}>
          <Text style={styles.label}>Instagram:</Text>
          <Text style={styles.text}>@adegapreferida</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 25,
    color: "#400303",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#400303",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
  },
  textContainer: {
    marginLeft: 15,
  },
  label: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#400303",
  },
  text: {
    fontSize: 14,
    marginTop: 3,
    color: "#333",
  },
});
