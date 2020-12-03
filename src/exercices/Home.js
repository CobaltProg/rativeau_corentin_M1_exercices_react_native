import * as React from 'react';
import { Button, View, Text, FlatList, StyleSheet, StatusBar, TouchableHighlight } from 'react-native';

export default function Home ({navigation}) {

    const DATA = [
        {
          title: 'Exercice1',
        },
        {
          title: 'Exercice2',
        },
        {
          title: 'Exercice3',
        },
        {
          title: 'Exercice4',
        },
        {
          title: 'Exercice5',
        },
        {
          title: 'Exercice6',
        },
        {
          title: 'Exercice7',
        },
        {
          title: 'Exercice8',
        },
        {
          title: 'Exercice9',
        },
      ];

      return (
        <View style={styles.container}>
          <FlatList
          data={DATA}
          renderItem={({ item, separators }) => (
            <TouchableHighlight
            key={item.key}
            onShowUnderlay={separators.highlight}
            onHideUnderlay={separators.unhighlight}>
                <View style={styles.item}>
                    <Text style={styles.title} onPress={() => navigation.navigate(item.title)}>{item.title}</Text>
                </View>
            </TouchableHighlight>
          )}
          />
        </View>
      );
    }

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      borderBottomColor: "#000",
      borderTopColor: "#000",
      borderBottomWidth: StyleSheet.hairlineWidth
    },
    title: {
      fontSize: 32,
    },
  });