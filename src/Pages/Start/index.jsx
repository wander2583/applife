import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Start(){
  return (
  <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={require("../../assets/icons/logo3.png")} style={styles.logo}/>
          <Text style={styles.description}>
            Vamos transformar suas vida {"\n"} patetica! em um jogo, buscando sempre {"\n"} o melhor nivel.
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  logo: {
    width: 300,
    height: 60,
    marginTop: 60,
    marginBotton: 20,
  },
  description: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 60,
  },
})
