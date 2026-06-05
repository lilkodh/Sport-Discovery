import React from 'react';
import {View, Text, ImageBackground, StyleSheet,TouchableOpacity, Dimensions, Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const FootballSwipeScreen = () => {
  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018',
      }}
      style={styles.background}
      resizeMode="cover">
      <LinearGradient
        colors={['rgba(0,0,0,0.85)', 'rgba(0,0,0,0.45)', 'rgba(0,0,0,0.9)']}
        style={styles.overlay}>
        <SafeAreaView style={styles.container}>
    
          <View style={styles.header}>
            <TouchableOpacity style={styles.circleBtn}>
              <Icon name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.circleBtn}>
              <Icon name="heart" size={24} color="#fff" />
            </TouchableOpacity>
          </View>

      
          <View style={styles.cardContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974',
              }}
              style={styles.cardImage}
            />
          </View>

       
          <View style={styles.pagination}>
            {[0, 1, 2, 3, 4].map((item, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  index === 2 && styles.activeDot,
                ]}
              />
            ))}
          </View>

          <View style={styles.footer}>
            <Text style={styles.swipeText}>
              ← SWAP LEFT OR RIGHT →
            </Text>
          </View>
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
};

export default FootballSwipeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  overlay: {
    flex: 1,
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  circleBtn: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 4,
    borderColor: '#66BB6A',
  },

  cardContainer: {
    alignSelf: 'center',
    width: width * 0.82,
    height: height * 0.55,
    borderRadius: 35,
    overflow: 'hidden',
    backgroundColor: '#111',
  },

  cardImage: {
    width: '100%',
    height: '100%',
  },

  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#8f8f8f',
    marginHorizontal: 4,
  },

  activeDot: {
    backgroundColor: '#fff',
    width: 10,
    height: 10,
  },

  footer: {
    alignItems: 'center',
    marginBottom: 30,
  },

  swipeText: {
    color: '#fff',
    fontSize: 22,
    letterSpacing: 1,
    fontWeight: '600',
  },
});