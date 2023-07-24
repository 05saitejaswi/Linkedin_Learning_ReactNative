import React from "react";
import { StyleSheet,Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.page}>
      <Text style={styles1.text1}>[TODO: INSERT CAT]</Text>
      <Text style={styles.text}>red</Text>
      <Text style={styles.text}>green</Text>
      <Text style={styles.text}>blue</Text>
    </View>
  );
}

const styles1 = StyleSheet.create({
    page: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    text1: {
      textAlign: "center",
      fontSize: 22
    }
  });

const styles = StyleSheet.create({
    page: {
      marginTop: 40,
      backgroundColor: "#DDD"
    },
    text: {
      fontSize: 22,
      color: "red",
      backgroundColor: "yellow",
      margin: 10,
      padding: 5
    },
    selectedText: {
      backgroundColor: "red",
      color: "yellow"
    }
  });