import { View, Text, StyleSheet ,Pressable, Image} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function SportCrad({sport}) {
    return(
        <View style={styles.card}>
  <View style={styles.imageContainer}>
     <Image
   source={{ uri:sport.image }}
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
     {sport.name}
  </Text>

  <Text style={styles.category}>
      {sport.category}
  </Text>
  <Text style={styles.discription}>
   {sport.shortDescription}
  </Text>

  <Pressable style={styles.button}
  onPress={() =>
          router.push({
            pathname: "/details",
            params: { sport: JSON.stringify(sport) }
          })
        }
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
  gap:11,
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
  paddingVertical: 10,
  borderRadius: 10,
  alignItems: "center",
},

buttonText: {
  color: "#000000",
  fontWeight: "600",
},
discription:{
fontSize: 16,
  fontWeight: "bold",
  
},
arow:{
    
},
})