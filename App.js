// import React from 'react'
// import {View,ActivityIndicator, ProgressViewIOSBase} from 'react-native'
// import { Button,Alert } from 'react-native-web';

// export default function App(){
//   const onButtonPress = () => {
//     Alert.alert(
//     //console.log(
//       `${new Date().toLocaleTimeString()} button press`
//     );
// };
  // console.log("see this message");

  // return(
    // <View style={{padding:50}}>
    // <Text>Hello World</Text>
    // <Text>Red</Text>
    // <Text>Green</Text>
    // <Text>Blue</Text>
    // </View>

//  <View style={{padding:50}}>
//   <Text style={{fontSize:50}}>Ready....</Text>
// </View> 

// );
// }
//________________

// import React from "react";
// import {
//   Text,
//   ActivityIndicator,
//   View,
//   ProgressViewIOS,
//   ProgressBarAndroid,
//   Button,
//   Alert,
//   Dimensions,
//   Platform
// } from "react-native";

// const { height, width } = Dimensions.get("window");


// export default function App() {
//   const onButtonPress = () => {
//     Alert.alert(
//       `${new Date().toLocaleTimeString()} button press`
//     );
//   };
//   return (
//     <View style={{ padding: 50 }}>
//       {/* <ProgressViewIOS progress={0.5} /> */}
//       {Platform.OS === "ios" && (
//         <ProgressViewIOS progress={0.5} />
//       )}
//       {Platform.OS === "android" && (
//         <ProgressBarAndroid
//           styleAttr="Horizontal"
//           indeterminate={false}
//           color="blue"
//           progress={0.5}
//         />
//       )}
//       <ActivityIndicator
//         size="large"
//         color="#61DBFB"
//       ></ActivityIndicator>
//       <Button title="click me" onPress={onButtonPress} />
//       <Text>OS: {Platform.OS}</Text>
//       <Text>Height: {height}</Text>
//       <Text>Width: {width}</Text>

//     </View>
//   );
// }


// __________________

// import React from "react";
// import { StyleSheet,Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.page}>
//       <Text style={styles1.text1}>[TODO: INSERT CAT]</Text>
//       <Text style={styles.text}>red</Text>
//       <Text style={styles.text}>green</Text>
//       <Text style={styles.text}>blue</Text>
//       <Image style={styles.image} source={picBiscuit} />
//       <Image style={styles.image} source={picJungle} />
//     </View>
//   );
// }

// const styles1 = StyleSheet.create({
//     page: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center"
//     },
//     text1: {
//       textAlign: "center",
//       fontSize: 22
//     }
//   });

// const styles = StyleSheet.create({
//     page: {
//       marginTop: 40,
//       backgroundColor: "#DDD"
//     },
//     text: {
//       fontSize: 22,
//       color: "red",
//       backgroundColor: "yellow",
//       margin: 10,
//       padding: 5
//     },
//     selectedText: {
//       backgroundColor: "red",
//       color: "yellow"
//     }
//   });
//   __________________

// import React from "react";
// import {
//   StyleSheet,
//   Image,
//   View,
//   Dimensions
// } from "react-native";

// import picBiscuit from "./assets/biscuit.jpg";

// export default function App() {
//   return (
//     <View style={styles.page}>
//       <Image style={styles.image} source={picBiscuit} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   page: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   image: {
//     flex: 1,
//     borderRadius: 50,
//     margin: 10,
//     width: Dimensions.get("window").width - 10
//   }
// });
// __________-

// import React, { useState } from "react";
// import { Text, View, StyleSheet } from "react-native";

// export default function App() {
//   const [backgroundColor, setBackgroundColor]=useState("blue");
//   return (
//     <View style={[styles.container, {backgroundColor}]}>
//       <Text style={styles.button} onPress={() =>setBackgroundColor("green")}>
//         green</Text>
//       <Text style={styles.button} onPress={() =>setBackgroundColor("red")}>
//         red</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   button: {
//     fontSize: 30,
//     margin: 10,
//     padding: 10,
//     borderWidth: 2,
//     borderRadius: 10,
//     alignSelf: "stretch",
//     textAlign: "center"
//   }
// });

// _____________
// import React, { useState } from "react";
// import {
//   Text,
//   View,
//   StyleSheet,
//   TouchableHighlight
// } from "react-native";

// export default function App() {
//   const [backgroundColor, setBackgroundColor] = useState(
//     "blue"
//   );
//   return (
//     <View style={[styles.container, { backgroundColor }]}>
//       <TouchableHighlight
//         style={styles.button}
//         onPress={() => setBackgroundColor("yellow")}
//         underlayColor="orange"
//       >
//         <View style={styles.row}>
//           <View
//             style={[
//               styles.sample,
//               { backgroundColor: "yellow" }
//             ]}
//           />
//           <Text style={styles.buttonText}>yellow</Text>
//         </View>
//       </TouchableHighlight>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   button: {
//     margin: 10,
//     padding: 10,
//     borderWidth: 2,
//     borderRadius: 10,
//     alignSelf: "stretch",
//     backgroundColor: "rgba(255, 255, 255, 0.8)"
//   },
//   buttonText: {
//     fontSize: 30,
//     textAlign: "center"
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center"
//   },
//   sample: {
//     height: 20,
//     width: 20,
//     margin: 5,
//     borderRadius: 10,
//     backgroundColor: "white"
//   }
// });

// _______________________

// import React, { useState } from "react";
// import {
//   View,
//   StyleSheet
// } from "react-native";
// import ColorButton from "./component";"component.js";

// export default function App() {
//   const [backgroundColor, setBackgroundColor] = useState(
//     "blue"
//   );
//   return (
//     <View style={[styles.container, { backgroundColor }]}>
//       <ColorButton
//         backgroundColor="red"
//         onPress={setBackgroundColor}
//       />
//       <ColorButton
//         backgroundColor="green"
//         onPress={setBackgroundColor}
//       />
//       <ColorButton
//         backgroundColor="blue"
//         onPress={setBackgroundColor}
//       />
//       <ColorButton
//         backgroundColor="yellow"
//         onPress={setBackgroundColor}
//       />
//       <ColorButton
//         backgroundColor="purple"
//         onPress={setBackgroundColor}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   }
// });
// _______________

// import React, { useState } from "react";
// import {
//   View,
//   StyleSheet,FlatList
// } from "react-native";
// import ColorButton from "./components/component";"component.js";
// import { DefaultColors } from "./data/DefaultColors";
// export default function App() {
//   const [backgroundColor, setBackgroundColor] = useState(
//     "blue"
//   );
//   return (
//     <FlatList style={[styles.container, { backgroundColor }]}
//     data={defaultColors}
//     renderItem={({item})=>{
//       return(
//         <ColorButton
//         key={item.id}
//         backgroundColor={item.color}
//         onPress={setBackgroundColor}
//       />
//       )
//     }}
//     />
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: "flex"
//   }
// });
// _______

// import React, { useState } from "react";
// import { StyleSheet, FlatList, Alert } from "react-native";
// import ColorButton from "./components/ColorButton";
// import ColorForm from "./components/ColorForm";

// import defaultColors from "./data/defaultColors.json";

// export default function App() {
//   const [backgroundColor, setBackgroundColor] = useState(
//     "blue"
//   );
//   return (
//     <>
//       <ColorForm
//         onNewColor={newColor =>
//           Alert.alert(`TODO: add color ${newColor}`)
//         }
//       />
//       <FlatList
//         style={[styles.container, { backgroundColor }]}
//         data={defaultColors}
//         renderItem={({ item }) => {
//           return (
//             <ColorButton
//               key={item.id}
//               backgroundColor={item.color}
//               onPress={setBackgroundColor}
//             />
//           );
//         }}
//       />
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: "flex"
//   }
// });


// ______________
// import React, { useState } from "react";
// import { StyleSheet, FlatList, Alert } from "react-native";
// import ColorButton from "./components/ColorButton";
// import ColorForm from "./components/ColorForm";
// import { generate } from "shortid";

// const useColors = () => {
//   const [colors, setColors] = useState([]);
//   const addColor = color => {
//     const newColor = { id: generate(), color };
//     setColors([newColor, ...colors]);
//   };
//   return { colors, addColor };
// };

// export default function App() {
//   const [backgroundColor, setBackgroundColor] = useState(
//     "blue"
//   );
//   const { colors, addColor } = useColors();
//   return (
//     <>
//       <ColorForm onNewColor={addColor} />
//       <FlatList
//         style={[styles.container, { backgroundColor }]}
//         data={colors}
//         renderItem={({ item }) => {
//           return (
//             <ColorButton
//               key={item.id}
//               backgroundColor={item.color}
//               onPress={setBackgroundColor}
//             />
//           );
//         }}
//       />
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: "flex"
//   }
// });
// _______________

// import React, { useState } from "react";
// import { StyleSheet, FlatList, Alert } from "react-native";
// import ColorButton from "./components/ColorButton";
// import ColorForm from "./components/ColorForm";
// import { useColors } from "./hooks";

// export default function App() {
//   const [backgroundColor, setBackgroundColor] = useState(
//     "blue"
//   );
//   const { colors, addColor } = useColors();
//   return (
//     <>
//       <ColorForm onNewColor={addColor} />
//       <FlatList
//         style={[styles.container, { backgroundColor }]}
//         data={colors}
//         renderItem={({ item }) => {
//           return (
//             <ColorButton
//               key={item.id}
//               backgroundColor={item.color}
//               onPress={setBackgroundColor}
//             />
//           );
//         }}
//       />
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     display: "flex"
//   }
// });

// ______________

import React from "react";
import ColorList from "./components/ColorList";
import ColorDetails from "./components/ColorDetails";
import  NavigationContainer  from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={ColorList} />
        <Screen name="Details" component={ColorDetails} />
      </Navigator>
    </NavigationContainer>
  );
}
