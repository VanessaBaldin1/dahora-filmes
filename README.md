# Dá Horas Filmes

Aplicativo desenvolvido utilizando React Native com Expo.

---

## 06_finalizacao-do-resultados-e-componentes-adicionais

- Definindo alias/apelido para os caminhos (tsconfig.json)
- Adição de states para resultados da busca por filmes e controle do loading
- Uso do componente nativo `<FlatList>` para listas de dados dinâmicos
- Ajuste do FlatList para renderização de componente `<CardFilme>` com dados de cada filme
- Ajuste do FlatList para renderização de componente `<ItemVazio>` caso não tenha resultados na busca de filme
- Ajuste do layout do FlatList para modo de 2 colunas (grid)
- Adição de imagem do filme e imagem alternativa em CardFilme
- Adição de créditos ao TMDB na tela Sobre

---

## 05_uso-da-api-com-config-env

- Cadastro no TheMovieDB para obter a API KEY
- Conversão do app.json para app.config.ts
- Adição da propriedade extra.apiKey no app.config.ts
- Instalação do Axios (lib muito usada para comunicação com APIs)
- Configuração do service/api.ts com parâmetros para acessar a API via Axios
- Utilização do useEffect com o Axios para fazer consulta de filmes na API

---

## 04_telas-basicas-de-busca-e-resultados

- Criação da versão básicas da telas `Busca` e `Resultados`
- Uso do componente `TextInput` para entrada de dados na tela
- Uso de state para gerenciar o filme digitado no campo de entrada
- Validação básica usando `Alert` e `Vibration`
- Navegação via programação com `useRouter` + passagem de parâmetros
- Acesso aos parâmetros de rota com `useLocalSearchParams`

---

## 03_navegacao-expo-router-e-telas-privacidade-sobre

- Instalação da lib `expo-router` e suas dependências
- Ajustes e atualização para o Expo SDK 54
- Configuração da `Stack` (pilha de navegação das telas) no arquivo `_layout.tsx`
- Migração do conteúdo /estrutura di `App.tsx` para o `_layout.tsx` e para as páginas correspondentes (index, privacidade e sobre)
- Troca da `StatusBar` para a versão React Native
- Configuração das rotas usando componente `Link` do expo-router
- Uso do componente `ScrollView` para telas cin varra de rolagem.

--

## 02_mais-estilos-logo-font-icones-pressable

- Aplicação da imagem do logo usando o componente <Image>
- Adição e configuração de fonte personalizada usando o `expo-font` e `useFonts`
- Estilização de App.tsx usando recursos do `StyleSheet`
- Substituição do `Button` por `Pressable` para criação de botões customizados
- Uso de ícones através do `@expo-vector-icons`
- Aplicação do `ActivityIndicator` para criação de um componente `Loading`

---

## 01_estrutura-e-estilização-basica

- Remoção das imagens originais na pasta assets
- Adição de imagens especificas para o aplicativo
- Configuraçãp dos detalhes do aplicativo em `app.json`
- Instalação da dependência (lib) `react-native-safe-area-context`

Use o comando: `npx expo install react-native-safe-area-context`

_Utilizamos o `expo install` para garantir a instalação de dependências (ou libs) que sejam compatíveis com a versão de SDK do Expo usada em seu projeto._

- Refatoramos a estrutura e estilização do `App.tsx` usando os componentes:
  `SafeAreaProvider`, `SafeAreaView`, `StatusBar` (do expo), `View`, `Text` e `Button`

- Uso do flex para determinar o tamanho das views.
