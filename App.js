import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import  Home  from './src/exercices/Home';
import Exercice1  from './src/exercices/Exercice1';
import Exercice2  from './src/exercices/Exercice2';
import Exercice3  from './src/exercices/Exercice3';
import Exercice4  from './src/exercices/Exercice4';
import Exercice5  from './src/exercices/Exercice5';
import Exercice6  from './src/exercices/Exercice6';
import Exercice7  from './src/exercices/Exercice7';
import Exercice8  from './src/exercices/Exercice8';
import Exercice9  from './src/exercices/Exercice9';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Accueil">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Exercice1" component={Exercice1} />
        <Stack.Screen name="Exercice2" component={Exercice2} />
        <Stack.Screen name="Exercice3" component={Exercice3} />
        <Stack.Screen name="Exercice4" component={Exercice4} />
        <Stack.Screen name="Exercice5" component={Exercice5} />
        <Stack.Screen name="Exercice6" component={Exercice6} />
        <Stack.Screen name="Exercice7" component={Exercice7} />
        <Stack.Screen name="Exercice8" component={Exercice8} />
        <Stack.Screen name="Exercice9" component={Exercice9} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
