import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";


export default function Start(){
  return (
  <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={require("../../assets/icons/logo3.png")} />
          <Text>
            Vamos transformar suas vida {"/n"} patetica! em um jogo, buscando sempre {"/n"} o melhor nivel.
          </Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundcolor: "rgba(21, 21, 21, 0.98)",
  },
  logo: {
    width: 300,
    height: 60,
    marginTop: 60,
    marginButton: 20,
  },
  desscription: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 60,
  },
})
