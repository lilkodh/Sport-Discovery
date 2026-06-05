import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import Swiper from "react-native-swiper";

export default function Gallery() {
  const { sport } = useLocalSearchParams();

  const item = JSON.parse(sport);

  return (
    <ImageBackground
      source={{ uri: item.gallery.Image}}
      style={styles.background}
      blurRadius={5}
    >
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Pressable
            style={styles.circleButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </Pressable>

          <Pressable style={styles.circleButton}>
            <Ionicons name="heart-outline" size={22} color="#fff" />
          </Pressable>
        </View>

        <View style={styles.swiperContainer}>
          <Swiper
            loop={true}
            showsPagination={true}
            dotStyle={styles.dot}
            activeDotStyle={styles.activeDot}
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
    backgroundColor: "rgba(0,0,0,0.55)",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 55,
  },

  circleButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#2E7D32",
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
    width: "85%",
    height: 550,
    borderRadius: 30,
  },

  dot: {
    backgroundColor: "#888",
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