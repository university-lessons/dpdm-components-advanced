import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <TextInput
            style={styles.headerSearch}
            placeholder="Buscar no PDMercado Livre"
          />
          <View style={styles.headerIcon} />
        </View>

        <Text style={styles.headerText}>
          Enviar para Fulano - Rua do Fulano, 800.
        </Text>
      </View>

      <View style={styles.iconBarContainer}>
        <View>
          <View style={styles.icon} />
          <Text style={styles.iconText}>Pagar</Text>
        </View>

        <View>
          <View style={styles.icon} />
          <Text style={styles.iconText}>Ofertas</Text>
        </View>

        <View>
          <View style={styles.icon} />
          <Text style={styles.iconText}>Mercado</Text>
        </View>

        <View>
          <View style={styles.icon} />
          <Text style={styles.iconText}>Ver mais</Text>
        </View>
      </View>

      <ScrollView>
        <View style={styles.offerContainer}>
          <Text style={styles.offerTitle}>Oferta do dia</Text>
          <View style={styles.offerImage} />
          <Text style={styles.offerDesc}>TV LG OLED 12</Text>
          <Text style={styles.offerPrice}>R$899,00</Text>
          <Text style={styles.offerTags}>Frete grátis</Text>
        </View>

        <View style={styles.offerContainer}>
          <Text style={styles.offerTitle}>Oferta do dia</Text>
          <View style={styles.offerImage} />
          <Text style={styles.offerDesc}>Iphone 12</Text>
          <Text style={styles.offerPrice}>R$4899,00</Text>
          <Text style={styles.offerTags}>10x sem Juros</Text>
        </View>

        <View style={styles.offerContainer}>
          <Text style={styles.offerTitle}>Oferta do dia</Text>
          <View style={styles.offerImage} />
          <Text style={styles.offerDesc}>Cama Box Casal</Text>
          <Text style={styles.offerPrice}>R$1599,00</Text>
          <Text style={styles.offerTags}>10x sem Juros</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    backgroundColor: "#fff159",
    padding: 24,
  },
  headerSearch: {
    backgroundColor: "white",
    paddingLeft: 8,
    height: 48,
    borderRadius: 24,
    flexGrow: 1,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  headerText: {
    marginTop: 8,
    fontSize: 16,
  },
  headerIcon: {
    width: 48,
    height: 48,
    backgroundColor: "lightgrey",
    borderRadius: 24,
    marginLeft: 16,
  },
  headerRow: {
    flexDirection: "row",
  },
  iconBarContainer: {
    flexDirection: "row",
    padding: 24,
    justifyContent: "space-between",
  },
  icon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "lightgrey",
  },
  iconText: {
    color: "grey",
    textAlign: "center",
  },
  offerContainer: {
    padding: 24,
    margin: 24,
    marginTop: 0,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  offerImage: {
    height: 150,
    backgroundColor: "#ADD8E6",
  },
  offerDesc: {
    fontSize: 14,
    marginTop: 16,
  },
  offerPrice: {
    fontSize: 18,
    marginTop: 16,
  },
  offerTags: {
    color: "green",
    marginTop: 16,
  },
});
