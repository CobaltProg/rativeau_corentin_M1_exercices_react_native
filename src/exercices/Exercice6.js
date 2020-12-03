import React, { Component } from "react";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Square from '../components/Square';

class Exercice6 extends Component {
  render() {

    const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    const listSquares = numbers.map((number) =>
      <Square text={"Square " + number} color="lightblue"/>
    );

    return(
      <ScrollView>
        <View  style={{ alignItems: "center"}}>
          {listSquares}
        </View>  
      </ScrollView>
    )
  }
}

export default Exercice6;
