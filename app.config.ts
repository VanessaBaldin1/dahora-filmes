// Módulo responsável pelo acesso à dados de variáveis de ambiente
import "dotenv/config";

import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Dáhora-Filmes",
  slug: "dahora-filmes",
  scheme: "dahora",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icone.png",
  userInterfaceStyle: "automatic",
  newArchEnabled: true,
  splash: {
    image: "./assets/splash-dahora.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  platforms: ["ios", "android"],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icone.png",
      backgroundColor: "#ffffff",
    },
    edgeToEdgeEnabled: true,
  },
  plugins: ["expo-font", "expo-asset", "expo-router"],
  //Acessando a API_KEY através do dotenv e guardando na chave apiKEY
  extra: {
    apiKey: process.env.API_KEY,
    eas: {
      projectId: "230080b9-7ecb-4098-8af8-d8bc841c2c2b",
    },
  },
});
