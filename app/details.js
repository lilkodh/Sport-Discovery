import { View, Text, StyleSheet, Image, Pressable ,ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
export default function Details() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/image.png")} style={styles.image} />
        <Pressable style={styles.backButton} onPress={router.back}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </Pressable>

        <Pressable style={styles.heartButton}>
          <Ionicons name="heart-outline" size={22} color="#fff" />
        </Pressable>
      </View>
      <ScrollView style={styles.detailsCard}>
        <View style={styles.textcontainer}>
          <Text style={styles.title1}>
            <Ionicons name="document-text-outline" size={26} color="#fff" />
            Full Description
          </Text>
          <Text style={styles.description}>
            ​Basketball is a dynamic team sport for use to manage basketball in
            developing basketball. Drdove the attacker of siroes and dynavio in
            a secions.
          </Text>
          <View style={styles.line}></View>
          <View style={styles.con}>
            <View style={styles.bordeer}>
              <Text style={styles.text}>TEAM SPORT</Text>
            </View>
            <View style={styles.bordeer}>
              <Text style={styles.text}>11 VS 11</Text>
            </View>
            <View style={styles.bordeer}>
              <Text style={styles.text}>HIGH </Text>
            </View>
          </View>
          <View style={styles.line}></View>
        </View>
        <View style={styles.textcontainer}>
          <Text style={styles.title1}>
            <Ionicons name="document-text-outline" size={26} color="#fff" />
            RULES
          </Text>
          <Text style={styles.description}>
            ​No handball (except goalkeeper) ​ Ball must stay within the field ​
            Score more goals than the opponent to win
          </Text>
          <View style={styles.equipmentContainer}>
  <Text style={styles.sectionTitle}>Equipment</Text>

  <View style={styles.photosRow}>
    <Image
      source={require("../assets/image.png")}
      style={styles.photo}
    />

    <Image
        source={require("../assets/image.png")}
      style={styles.photo}
    />

    <Image
         source={require("../assets/image.png")}
      style={styles.photo}
    />
     <Image
         source={require("../assets/image.png")}
      style={styles.photo}
    />
  </View>
</View>
 <Pressable style={styles.galleryButton} onPress={router.push("/gallery")}>
    <Ionicons name="images-outline" size={20} color="#fff" />
    <Text style={styles.galleryText}>Open Gallery</Text>
  </Pressable>
        </View>
       
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#081C15",
  },
  imageContainer: {
   height:500,
     
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
    borderRadius:25,
marginTop:-150,

   },
   textcontainer:{
  paddingHorizontal:40,
  top:15,
  gap:30,

   },
   title1:{
  
  fontSize:25,
  fontFamily:"bold",
  color:'white',
    fontWeight:"bold",
  
},
line:{
  borderWidth:1,
  width:"110%",
  alignSelf:"center",
  borderColor:"#5bac4f",
  bottom:10,
},
con:{
  flexDirection:"row",
  justifyContent:"space-between",

},
bordeer:{
  
  height:60,
  width:80,
  borderRadius:15,
  backgroundColor:"#1E4E18",
  justifyContent:"center",
alignItems:"center"
  
},
text:{
  fontSize:18,
  textAlign:"center",
  color:"#d0c573",
  fontWeight:"bold",

},
description:{
  letterSpacing:1,
  fontSize:15,
  color:"white",
  fontWeight:"200"
  
},
equipmentContainer: {
    gap:30,
  },

  sectionTitle: {
   fontSize:25,
  fontFamily:"bold",
  color:'white',
    fontWeight:"bold",
  },

  photosRow: {
    flexDirection: "row",
    justifyContent:'space-between'
  },

  photo: {
    width: 60,
    height: 60,
    borderRadius: 35, 
    borderWidth: 2,
    borderColor: "#22FF00",
  },
  galleryButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 12,
    gap: 8,
  },

  galleryText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
});