import {
  NavigationProp,
  RouteProp,
  useNavigation,
} from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import ButtonComponent from "../components/molecules/ButtonComponent";
import { useEffect } from "react";
import { RootNavegationParamList } from "../navegation/AppNavegation";
// import React, { useEffect } from 'react'
// // import { NavigationProp, RouteProp, useNavigation, useRoute } from '@react-navigation/native'
// import ButtonComponent from '@app/components/molecules/ButtonComponent'
// // import ButtonComponent from '../components/ButtonComponent'
// // import { RootNavigationParamList } from '../navigation/AppNavigation'

// const EventDetailScreen = (props: Props) => {

//   /**
//    * los datos pasados desde WelcomeScreen se reciven desde el obj 'route'
//    * desde 'route.params' podemos extraer los datos pasados
//    * 'route.params' puede ser 'undefined' ose que no existan, asi que de ser el caso debemos manejar ese caso.
//    */
//   const { name, lastName, course } = props.route.params;

//   // console.log('route params', props.route.params)

//   const handleOnPressButton = () => {
//     props.navigation.navigate('WelcomeScreen');
//   }

//   return (
//     <View>
//       <Text>EventDetailScreen</Text>
//       <ButtonComponent
//         title='Ir atras!'
//         disabled={false}
//         onPress={handleOnPressButton}
//       />
//     </View>
//   )
// }

type Props = {
  navigation: NavigationProp<RootNavegationParamList>;
  route: RouteProp<RootNavegationParamList, "EventDetailScreen">;
};

const EventDetailScreen = (props: Props) => {
  // const navigation = useNavigation()
  // const { name, lastName, course } = props.route.params;

  const handleOnPressButton = () => {
    props.navigation.navigate(`WelcomeScreen`);
  };
  useEffect(() => {
    // podemos modificar ciertas opciones de la vista en cuestion como:
    // - poner el 'header title' con un nombre en particular
    // - asignar un nuevo componente al header[left-right]
    // - cambiar estilos del header
    // - ocultar el header, etc...
    props.navigation.setOptions({
      title: "Este en mi custom title",
    });
  }, []);

  return (
    <View>
      <Text>EventDetailScreen</Text>
      <ButtonComponent title="Ir al atras!" onPress={handleOnPressButton} />
    </View>
  );
};

export default EventDetailScreen;

const styles = StyleSheet.create({});
