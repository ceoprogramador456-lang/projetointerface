import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function TelaInicial() {
  return (
    <ImageBackground
      source={require("../assets/vn10.jpg")}
      style={styles.container}
      blurRadius={10}
    >
      <View style={styles.boxTexto}>
        <Text style={styles.titulo}>Adega Preferida</Text>
        <Text style={styles.subtitulo}>
          Aqui você encontra os melhores e mais saborosos vinhos.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  boxTexto: {
    backgroundColor: "rgba(0,0,0,0.6)",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
  },
  titulo: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  subtitulo: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});
