import { View, Text, StyleSheet ,Pressable, Image} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
export default function SportCrad({sport}) {
    return(
        <View style={styles.card}>
  <View style={styles.imageContainer}>
     <Image
    source={require("../assets/football.jpg")}
    style={styles.image}
  />

   <View style={styles.overlay}>
    <Ionicons
      name="heart-outline"
      size={30}
      color="white"
    />
  </View>
</View>

  <Text style={styles.title}>
    Football
  </Text>

  <Text style={styles.category}>
    Collective
  </Text>
  <Text style={styles.discription}>
    Most popular team sport...
  </Text>

  <Pressable style={styles.button}
 onPress={() => router.push("/details")}
>
    <Text style={styles.buttonText}>
        
      DISCOVER
       <Ionicons
      name="arrow-forward"
      size={15}
      color="black"
      style={styles.arow}
    />
    </Text>
  </Pressable>
</View>
    );
}
const styles = StyleSheet.create({

    card: {
  width: "48%",
  backgroundColor: "#E8E9DB",
  borderRadius: 20,
  borderColor:"#59a84c",
  borderWidth:3,
  gap:15,
  padding:5,
},
image:{
width: "100%",
  height: "100%",
},
imageContainer: {
  
 height: 200,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
  overflow: "hidden",
},
overlay: {
  position: "absolute",
  top: 10,
  right: 10,
},

title: {
  fontSize: 20,
  fontWeight: "bold",
  textAlign:"center",
},

category: {
  color: "#777",
  fontSize:16,
},

button: {
  backgroundColor: "#59a84c",
  margin:8,
  paddingVertical: 10,
  borderRadius: 10,
  alignItems: "center",
},

buttonText: {
  color: "#000000",
  fontWeight: "600",
},
discription:{
fontSize: 20,
  fontWeight: "bold",
  
},
arow:{
    
},
})