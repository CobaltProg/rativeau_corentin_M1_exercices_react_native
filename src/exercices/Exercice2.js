import React, { Component } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";

class Exercice2 extends Component {
  Alert() {
    Alert.alert(
      "Alert",
      "hello!"
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.button} title="Tap me" onPress={() => this.Alert()}/>
      </View>
    );
  }
}
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    button: {
      borderRadius: 10
    }
  })

export default Exercice2;