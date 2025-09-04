import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={estilos.container}>
        <StatusBar style="auto" />
        <View style={estilos.viewLogo}>
          <Text>Dá Hora Filmes </Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Button title="Buscar Filmes" />
          <Button title="Favoritos" />
        </View>
        <View style={estilos.viewRodape}>
          <Button title="Privacidade" />
          <Button title="Sobre" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

//Estilos - para aplicar é a mesma forma que aplicamos os modulos no next.js

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#fff9c4",
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center", //passa ser vertical
  },
  viewLogo: {
    backgroundColor: "#a5d6a7",
    flex: 3,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  viewBotoes: {
    backgroundColor: "#ffcc80",
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  viewRodape: {
    backgroundColor: "#ef9a9a",
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
