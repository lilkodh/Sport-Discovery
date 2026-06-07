import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
export default function Details() {
  const { sport } = useLocalSearchParams();

  const item = JSON.parse(sport);
  const [favorite, setFavorite] = useState(false)
  useEffect(()=> {
    const loadFavorite = async () => {
      const saved = await AsyncStorage.getItem(
      `favorite_${item.id}`
      );
      if(saved !== null) {
        setFavorite(JSON.parse(saved));

      }
    };
    loadFavorite();
  }, []);
 
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Pressable style={styles.backButton} onPress={router.back}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </Pressable>

        <Pressable style={styles.heartButton}
        onPress={async () => {
          const newValue = !favorite;
          setFavorite(newValue);
          await AsyncStorage.setItem(
           `favorite_${item.id}`, JSON.stringify(newValue)
          );
        }}
        >
          <Ionicons 
          name={favorite ?"heart" : "heart-outline"

           }
         
          size={22}
          
          color={favorite ? "red" : "white"} />
        </Pressable>
      </View>
      <ScrollView style={styles.detailsCard}>
        <View style={styles.textcontainer}>
          <Text style={styles.title1}>
            <Ionicons name="document-text-outline" size={26} color="#fff" />
            Full Description
          </Text>
          <Text style={styles.description}>{item.description}</Text>
          <View style={styles.line}></View>
          <View style={styles.con}>
            <View style={styles.bordeer}>
              <Text style={styles.text}> {item.category}</Text>
            </View>
            <View style={styles.bordeer}>
              <Text style={styles.text}>{item.players}</Text>
            </View>
            <View style={styles.bordeer}>
              <Text style={styles.text}>{item.difficulty}</Text>
            </View>
          </View>
          <View style={styles.line}></View>
        </View>
        <View style={styles.textcontainer}>
          <Text style={styles.title1}>
            <Ionicons name="document-text-outline" size={26} color="#fff" />
            RULES
          </Text>
          <Text style={styles.description}>{item.rules?.join("\n")}</Text>
          <View style={styles.equipmentContainer}>
            <Text style={styles.sectionTitle}>Equipment</Text>

            <View style={styles.photosRow}>
              {item.equipment?.map((eq , k) => (
                <View key={k}>
                  <Image source={{ uri: eq.image }} style={styles.photo} />

                  <Text style={{ color: "#fff", fontSize: 10 , textAlign:"center", }}>{eq.name}</Text>
                  
                </View>
              ))}
            </View>
          </View>
         
        </View>
         <Pressable
  style={styles.galleryButton}
  onPress={() =>
    router.push({
      pathname: "/gallery",
      params: {
        sport: JSON.stringify(item),
      },
    })
  }
>
  <Ionicons name="images-outline" size={20} color="#fff" />
  <Text style={styles.galleryText}>Open Gallery</Text>
</Pressable>
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
    height: 500,
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
  detailsCard: {
    backgroundColor: "#143D1E",
    borderRadius: 25,
    marginTop: -120,
    
  },
  textcontainer: {
    paddingHorizontal: 40,
    top: 15,
    gap: 30,
  },
  title1: {
    fontSize: 25,
    fontFamily: "bold",
    color: "white",
    fontWeight: "bold",
  },
  line: {
    borderWidth: 1,
    width: "110%",
    alignSelf: "center",
    borderColor: "#5bac4f",
    bottom: 4,
  },
  con: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  bordeer: {
    height: 60,
    width: 80,
    borderRadius: 15,
    backgroundColor: "#1E4E18",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "#d0c573",
    fontWeight: "bold",
  },
  description: {
    letterSpacing: 1,
    fontSize: 15,
    color: "white",
    fontWeight: "200",
  },
  equipmentContainer: {
    gap: 10,
  },

  sectionTitle: {
    fontSize: 25,
    fontFamily: "bold",
    color: "white",
    fontWeight: "bold",
  },

  photosRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  photo: {
    width: 60,
    height: 60,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#22FF00",
  },
  galleryButton: {
  backgroundColor: "#1f8a3d",
  borderRadius: 30,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  paddingVertical: 14,
  paddingHorizontal: 80,
  alignSelf: "center",
  marginTop: 30,
},

galleryText: {
  color: "#fff",
  fontSize: 18,
  fontWeight: "700",
  letterSpacing: 0.5,
},
});
