import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import TextComponent from "../components/TextComponent";

const WelcomeScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <TextComponent size="12" weight="bold" color="muted">
        Welcome to my app!
      <TextComponent> Welcome to my app!</TextComponent>
      </TextComponent>
    </SafeAreaView>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
    },
    text: {
      fontSize: 18,
      fontWeight: '400',
    },
    textoNegrita: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red',
        textDecorationColor: 'underline',
    },
  });