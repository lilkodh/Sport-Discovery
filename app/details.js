import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
export default function Details() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Image
      source={require("../assets/image.png")}
         style={styles.image}
        />
        <Pressable style={styles.backButton}
        onPress={router.back}
        >
          <Ionicons name="arrow-back" size={22} color="#fff" />
      </Pressable>

       <Pressable style={styles.heartButton}>
      <Ionicons name="heart-outline" size={22} color="#fff" />
      </Pressable>
      <View style={styles.detailsCard}>
        <View style={styles.textcontainer}>
  <Text style={styles.title1}>Full Description</Text>
  </View>
</View>
    </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#081C15",
  },
  imageContainer: {
    height: 460,
    
},
  image: {
    width: "100%",
    height: "100%",
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 15,
    width: 60,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
  },
  heartButton: {
    position: "absolute",
    top: 40,
    right: 15,
    width: 60,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#4CAF50",
    justifyContent: "center",
    alignItems: "center",
  },
  detailsCard:{
    borderColor:"white",
    height:600,
    backgroundColor:"#143D1E",
    borderRadius:30,
    bottom:150,
   },
});