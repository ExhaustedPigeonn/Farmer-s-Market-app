// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground
      source={require('../assets/images/Wheat-field.png')} // Updated image file name
      style={styles.backgroundImage}
      resizeMode="cover" // Cover the entire background
    >
      <LinearGradient
        colors={['rgba(237, 215, 136, 0)', 'rgba(237, 215, 136, 0.8)']} // Gradient from transparent to dark
        style={styles.gradient}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../assets/images/farmer-icon1.png')} // Use your icon file path
                style={styles.logo}
                resizeMode="contain" // Adjust the logo to fit its container
              />
            </View>
            <Text style={styles.title}>Farmer's Market</Text>
            <Text style={styles.subtitle}>A bridge to the farmers</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.getStartedButton}
              onPress={() => navigation.navigate('LanguageScreen')}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1, // Ensure it fills the parent
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 20,
    justifyContent: 'space-around', // Adjust to space content
    alignItems: 'center', // Center all content horizontally
  },
  header: {
    alignItems: 'center',
    marginBottom: 50, // Increased margin to push content lower
  },
  logoContainer: {
    width: 100, // Adjust the width as necessary
    height: 100, // Adjust the height as necessary
    marginBottom: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  logo: {
    width: '100%',
    height: '100%',
    tintColor: 'rgb(184, 109, 0)', // Set the logo color
    opacity: 0.9, // Optional: Adjust opacity for blending effect
  },
  title: {
    fontSize: 34, // Increased font size for the title
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18, // Increased font size for the subtitle
    color: '#7F8C8D',
    textAlign: 'center',
    marginTop: 10, // Added margin to push it lower
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  getStartedButton: {
    backgroundColor: '#B86D00',
    height: 60, // Adjusted height as needed
    width: 150, // Set a specific width for a narrower button
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20, // Increased font size for better visibility
    fontWeight: 'bold',
  },
});

export default HomeScreen;
