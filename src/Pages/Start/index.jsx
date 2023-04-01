import { Image, ScrollView, Text, View } from "react-native/types";
import React from "react";


export default function Start(){
  return (
  <View>
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
