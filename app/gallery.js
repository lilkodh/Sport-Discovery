import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
  ScrollView 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import Swiper from "react-native-swiper";
export default function Gallery() {
  const { sport } = useLocalSearchParams();

  const item = JSON.parse(sport);

  return (
    
    <ImageBackground
       source={require("../assets/foo.jpg")}
      style={styles.background}
      
    >
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Pressable
            style={styles.circleButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </Pressable>

        </View>

        <View style={styles.swiperContainer}>
          <Swiper
          loop={true}
          horizontal={true}
           autoplay={true}
              showsPagination={true}
                showsButtons={false}
                paginationStyle={{ bottom: 10 }}
          >
            {item.gallery?.map((img, index) => (
              <View key={index} style={styles.slide}>
                <Image
                  source={{ uri: img }}
                  style={styles.cardImage}
                />
              </View>
            ))}
          </Swiper>
        </View>

        <View style={styles.swipeContainer}>
          <Ionicons
            name="swap-horizontal"
            size={22}
            color="#fff"
          />
          <Text style={styles.swipeText}>
            SWIPE LEFT OR RIGHT
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
    

  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 55,
  },

  circleButton: {
    width: 60,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#27a42d",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#66BB6A",
  },

  swiperContainer: {
    flex: 1,
    justifyContent: "center",
  },

  slide: {
    justifyContent: "center",
    alignItems: "center",
  },

  cardImage: {
    marginTop:50,
    width: "80%",
    height: 500,
    borderRadius: 20,
    borderWidth:5,
    borderColor:"green",
  },

  dot: {
    backgroundColor: "#ec0000",
    width: 8,
    height: 8,
    borderRadius: 4,
  },

  activeDot: {
    backgroundColor: "#fff",
    width: 10,
    height: 10,
    borderRadius: 5,
  },

  swipeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    marginBottom: 35,
  },

  swipeText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
  },
});