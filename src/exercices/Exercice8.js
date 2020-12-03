import React, { Component } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const users = [
    {
        "id": 1,
        "first_name": "Henry",
        "last_name": "Willis"
        },
        {
        "id": 2,
        "first_name": "Geraldine",
        "last_name": "Atkins"
        },
        {
        "id": 3,
        "first_name": "Shirley",
        "last_name": "Hull"
        },
        {
        "id": 4,
        "first_name": "Judith",
        "last_name": "Hewitt"
        },
        {
        "id": 5,
        "first_name": "Danielle",
        "last_name": "Baker"
        },
        {
        "id": 6,
        "first_name": "Luis",
        "last_name": "Curtis"
        },
        {
        "id": 7,
        "first_name": "Jeanne",
        "last_name": "Boyette"
        },
        {
        "id": 8,
        "first_name": "Leah",
        "last_name": "Denton"
        },
        {
        "id": 9,
        "first_name": "William",
        "last_name": "Nguyen"
        },
        {
        "id": 10,
        "first_name": "Joshua",
        "last_name": "Douglas"
        },
        {
        "id": 11,
        "first_name": "Herbert",
        "last_name": "Aldridge"
        },
        {
        "id": 12,
        "first_name": "Benjamin",
        "last_name": "Song"
        },
        {
        "id": 13,
        "first_name": "Harvey",
        "last_name": "Clements"
        },
        {
        "id": 14,
        "first_name": "Billy",
        "last_name": "Singleton"
        },
        {
        "id": 15,
        "first_name": "Suzanne",
        "last_name": "Kay"
        },
        {
        "id": 16,
        "first_name": "Patricia",
        "last_name": "Gordon"
        },
        {
        "id": 17,
        "first_name": "Alan",
        "last_name": "Levine"
        },
        {
        "id": 18,
        "first_name": "Ricky",
        "last_name": "Barbour"
        },
        {
        "id": 19,
        "first_name": "Arnold",
        "last_name": "Yang"
        },
        {
        "id": 20,
        "first_name": "Betsy",
        "last_name": "Jordan"
        },
        {
        "id": 21,
        "first_name": "Jason",
        "last_name": "Livingston"
        },
        {
        "id": 22,
        "first_name": "Dianne",
        "last_name": "Hicks"
        },
        {
        "id": 23,
        "first_name": "Constance",
        "last_name": "Stanton"
        },
        {
        "id": 24,
        "first_name": "Patsy",
        "last_name": "Hewitt"
        },
        {
        "id": 25,
        "first_name": "Hannah",
        "last_name": "Spivey"
        },
        {
        "id": 26,
        "first_name": "Jim",
        "last_name": "Cochran"
        },
        {
        "id": 27,
        "first_name": "Kyle",
        "last_name": "Cross"
        },
        {
        "id": 28,
        "first_name": "Jerome",
        "last_name": "Goldman"
        },
        {
        "id": 29,
        "first_name": "Vincent",
        "last_name": "Singer"
        },
        {
        "id": 30,
        "first_name": "Yvonne",
        "last_name": "Stanley"
        },
        {
        "id": 31,
        "first_name": "Dennis",
        "last_name": "Katz"
        },
        {
        "id": 32,
        "first_name": "Kristin",
        "last_name": "Hall"
        },
        {
        "id": 33,
        "first_name": "Connie",
        "last_name": "Hewitt"
        },
        {
        "id": 34,
        "first_name": "Grace",
        "last_name": "Case"
        },
        {
        "id": 35,
        "first_name": "Zachary",
        "last_name": "Warner"
        },
        {
        "id": 36,
        "first_name": "Leah",
        "last_name": "McMillan"
        },
        {
        "id": 37,
        "first_name": "Dorothy",
        "last_name": "Denton"
        },
        {
        "id": 38,
        "first_name": "Franklin",
        "last_name": "Chung"
        },
        {
        "id": 39,
        "first_name": "Jackie",
        "last_name": "McKenzie"
        },
        {
        "id": 40,
        "first_name": "Mark",
        "last_name": "Turner"
        },
        {
        "id": 41,
        "first_name": "Jessica",
        "last_name": "Weiss"
        },
        {
        "id": 42,
        "first_name": "Glenda",
        "last_name": "Nixon"
        },
        {
        "id": 43,
        "first_name": "Ronald",
        "last_name": "Padgett"
        },
        {
        "id": 44,
        "first_name": "Vickie",
        "last_name": "Boswell"
        },
        {
        "id": 45,
        "first_name": "Hazel",
        "last_name": "Clements"
        },
        {
        "id": 46,
        "first_name": "Melanie",
        "last_name": "McMahon"
        },
        {
        "id": 47,
        "first_name": "Franklin",
        "last_name": "Bender"
        },
        {
        "id": 48,
        "first_name": "Gretchen",
        "last_name": "Griffin"
        },
        {
        "id": 49,
        "first_name": "Hazel",
        "last_name": "Stark"
        },
        {
        "id": 50,
        "first_name": "Jean",
        "last_name": "Glover"
        }]

class Exercice8 extends Component {
    render() {
        return(
            <View style={styles.container}>
                <FlatList
                data={users}
                keyExtractor={item => item.id.toString()}
                renderItem={( {item} ) => (
                    <View style={styles.card}>
                        <Text>{item.first_name} {item.last_name}</Text>
                    </View>
                )}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    padding: 10,
    borderBottomWidth: 1
  }
})


export default Exercice8;