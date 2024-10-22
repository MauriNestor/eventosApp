import {Button, SafeAreaView, StyleSheet, Text} from 'react-native'
// import { NavigationProp } from '@react-navigation/native';


import TextComponent from '../components/TextComponent';
import ButtonComponent from '../components/buttonComponent';
// import TextInputComponent from '../components/atoms/TextInputComponent';
// import { useState } from 'react';



// const WelcomeScreen = ({ navigation }: Props) => {
//   const [input, setInput] = useState<string>('')


//   const handleOnPressButton = () => {
//     // navigation.navigate('EventDetailScreen')
//     // navigation.navigate('EventDetailScreen', {
//     //   name: 'abdiel',
//     //   lastName: "Orellana",
//     //   course: "Expo",
//     // })
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <TextComponent
//         size='24'
//         weight='light'
//         color='muted'
//         textAlign='center'
//       >
//         Welcome to the App!
//         <TextComponent
//           size='24'
//           weight='bold'
//           color='primary'
//           underline={true}
//           onPress={handleOnPress}
//         >
//           Texto en negrita
//         </TextComponent>
//       </TextComponent>

//       <TextComponent
//           size='24'
//           weight='bold'
//           color='dark'
//           // underline={true}
//           // onPress={handleOnPress}
//         >
//           {`Input value ${input}`}
//         </TextComponent>

//       <TextInputComponent
//         placeholder='Ingrese Texto'
//         value={input}
//         onChangeText={(text) => setInput(text)}
//       />
//       {/* <ButtonComponent
//         title='Ir al detalle del evento!'
//         disabled={false}
//         onPress={handleOnPressButton}
//       /> */}
//     </SafeAreaView>
//   )
// }


type Props = {
 navegation: NavegationProp<RootNavegationParamList>
}

const WelcomeScreen = ({ navigation }:any ) => {

  const handleOnPress = () => {
    console.log('texto en negrita presionado')
  }
  const handleOnPressButton = () => {
    navigation.navigate('EventDetailScreen')
}

  return (
    <SafeAreaView>
      <TextComponent size='18' weight='light' color='muted' textAlign='center'>
        Welcome to the App!
        <TextComponent size='24' weight='light' color='dark' onPress={handleOnPress} >texto negrita</TextComponent>
      </TextComponent>

      <ButtonComponent title='Ir al detalle del evento!' onPress={handleOnPressButton} />
  
    </SafeAreaView>
  );
}
export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
  textoNegrita: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    textDecorationLine: 'underline'
  }
});