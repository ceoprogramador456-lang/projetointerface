import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const vinhos = [
  {
    nome: "Chatigny Chardonnay",
    descricao:
      "Vinho leve, refrescante e levemente cítrico da cor amarelo palha. Perfeito com carnes brancas e massa ao pesto.",
    imagem: require("../assets/vinho-seco.jpg"),
  },
  {
    nome: "Concha y Toro Exportacion",
    descricao:
      "Vinho rosé fresco, intenso e macio da cor rosa pálido. Perfeito com saladas e aperitivos.",
    imagem: require("../assets/vinho-rose.jpg"),
  },
  {
    nome: "Portada Winemaker's",
    descricao:
      "Vinho encorpado, saboroso e frutado, com final levemente adocicado. Sua cor é vermelho-rubi. Perfeito com queijo parmesão e carnes assadas ou grelhadas.",
    imagem: require("../assets/vinho-branco.jpg"),
  },
  {
    nome: "Elvio Cogno Ravera Barolo",
    descricao:
      "Vinho estruturado, com sabor de cereja vermelha madura, framboesa, notas de tabaco e taninos aveludados. Sua cor é vermelho granada e é perfeito com carnes vermelhas e molhos encorpados.",
    imagem: require("../assets/vinho-tinto.jpg"),
  },
];

export default function TelaCatalogo() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
      <Text style={styles.titulo}>Nossos vinhos</Text>
      <Text style={styles.descricaoGeral}>
        Trabalhamos com o melhor vinho dos seguintes tipos: Vinho branco, vinho rosé, vinho tinto e vinho seco.
      </Text>

      {vinhos.map((item, index) => (
        <View key={index} style={styles.card}>
          <Image source={item.imagem} style={styles.imagem} />
          <View style={styles.info}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.descricao}>{item.descricao}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 15, paddingTop: 15 },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#400303",
  },
  descricaoGeral: {
    fontSize: 14,
    marginBottom: 15,
    color: "#333",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#b48a7e",
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
    alignItems: "flex-start",
  },
  imagem: {
    width: 60,
    height: 120,
    resizeMode: "contain",
    marginRight: 12,
  },
  info: { flex: 1 },
  nome: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 4,
    color: "#400303",
  },
  descricao: {
    fontSize: 13,
    color: "#3d2b27",
  },
});
