import { View, Text, Image, StyleSheet } from "react-native";
export default function Header() {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>
        SPORT DISCOVERY
      </Text>

      <Text style={styles.subtitle}>
        Explore • Discover • Play
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#143d1e",
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60,
  },
  logo: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
  subtitle: {
    color: "#D8F3DC",
    marginTop: 5,
    fontSize: 12,
    letterSpacing: 1,
  },
});