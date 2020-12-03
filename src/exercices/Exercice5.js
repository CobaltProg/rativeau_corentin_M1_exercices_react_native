import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Square from '../components/Square';

class Exercice5 extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Square text="Square 1" color="lightblue"/>
        <Square text="Square 2" color="#01796F"/>
        <Square text="Square 3" color="#FA8072"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row'
  }
})

export default Exercice5;
