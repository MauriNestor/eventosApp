import { Button, SafeAreaView, StyleSheet, Text } from "react-native";
// import { NavigationProp } from '@react-navigation/native';

import TextComponent from "../components/TextComponent";
import ButtonComponent from "../components/buttonComponent";
import { RootNavegationParamList } from "../navegation/AppNavegation";
import { NavigationProp } from "@react-navigation/native";

type Props = {
  navigation: NavigationProp<RootNavegationParamList>;
};

const WelcomeScreen = ({ navigation }: Props) => {
  const handleOnPress = () => {
    console.log("texto en negrita presionado");
  };
  const handleOnPressButton = () => {
    navigation.navigate("EventDetailScreen");
  };

  return (
    <SafeAreaView>
      <TextComponent size="18" weight="light" color="muted" textAlign="center">
        Welcome to the App!
        <TextComponent
          size="24"
          weight="light"
          color="dark"
          onPress={handleOnPress}
        >
          texto negrita
        </TextComponent>
      </TextComponent>

      <ButtonComponent
        title="Ir al detalle del evento!"
        onPress={handleOnPressButton}
      />
    </SafeAreaView>
  );
};
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "600",
  },
  textoNegrita: {
    fontSize: 24,
    fontWeight: "bold",
    color: "blue",
    textDecorationLine: "underline",
  },
});
