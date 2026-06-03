import { View, StyleSheet , Text ,FlatList , Pressable , ScrollView} from "react-native";
import { useState } from "react";
import Header from "../components/Header";
import SportCard from "../components/SportCard";

const sports = [
  {
    id: "1",
    title: "Football",
    category: "Team Sport",
    image: require("../assets/football.jpg"),
  },
  {
    id: "2",
    title: "Basketball",
    category: "Team Sport",
   image: require("../assets/football.jpg"),
  },
  {
    id: "3",
    title: "Tennis",
    category: "Individual",
    image: require("../assets/football.jpg"),
  },
  {
    id: "4",
    title: "Swimming",
    category: "Individual",
    image: require("../assets/football.jpg"),
  },
];

export default function Home () {
  const [showAll, setShowAll] = useState(false);
  const displayedSports = showAll
  ? sports
  : sports.slice(0, 2);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>
          POPULAR SPORTS
          
        </Text>
      
      <FlatList
  data={displayedSports}
  numColumns={2}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <SportCard sport={item}/>
  )}
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{
    paddingBottom: 100, gap:10,
  }}
  columnWrapperStyle={{
  gap:10,
  justifyContent:"center",
}}
  ListFooterComponent={
    <Pressable
      style={styles.viewMoreBtn}
      onPress={() => setShowAll(!showAll)}
    >
      <Text style={styles.viewMoreText}>
        {showAll ? "Show Less" : "View More Sports"}
      </Text>
    </Pressable>
  }
/>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8E9DB",
 
  },

  content: {
  flex: 1,
  paddingHorizontal: 20,
  marginTop:33,
},

  sectionTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#666",
    letterSpacing: 5,
    
  },
  cardsContainer:{
    flexDirection: "row",
  justifyContent: "center",
  gap:15,

  },
  viewMoreBtn: {
  backgroundColor: "#0E5A2D",
  paddingVertical: 14,
  borderRadius: 30,
  marginTop: 20,
  alignItems: "center",
},

viewMoreText: {
  color: "#FFF",
  fontWeight: "bold",
  fontSize: 15,
  
},
});