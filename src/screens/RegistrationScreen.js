// screens/RegistrationScreen.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { LinearGradient } from 'expo-linear-gradient';

const RegistrationScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [aadharCard, setAadharCard] = useState('');
  const [photo, setPhoto] = useState(null);

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();
    if (!result.canceled) {
      setPhoto(result.assets[0].uri); // Store the photo URI in the background
      Alert.alert("Success", "Photo uploaded successfully!"); // Success message
    }
  };

  const handleRegistration = () => {
    console.log('Registration Data:', {
      firstName,
      lastName,
      aadharCard,
      photo,
    });
    // Navigate to the LocationScreen after clicking Finish
    navigation.navigate('LocationScreen');
  };

  return (
    <LinearGradient
      colors={['#F4E7B7', '#FFFFFF']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.content}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../assets/images/farmer-icon1.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>

            <Text style={styles.title}>Enter Your Details</Text>

            <Text style={styles.instruction}>Please enter your first name</Text>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
            />

            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
            />

            <Text style={styles.instruction}>Please enter your Aadhar card number</Text>
            <TextInput
              style={styles.input}
              placeholder="Aadhar Card Number"
              value={aadharCard}
              onChangeText={setAadharCard}
              keyboardType="numeric"
            />

            <View style={styles.uploadPhotoContainer}>
              <Text style={styles.uploadPhotoText}>Upload or Click your Photo</Text>
              <TouchableOpacity style={styles.photoButton} onPress={pickImage}>
                <Image
                  source={require('../assets/images/camera-icon.png')}
                  style={styles.cameraIcon}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.finishButton} onPress={handleRegistration}>
              <Text style={styles.buttonText}>Finish</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.navigate('LanguageScreen')}
            >
              <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  logoContainer: {
    width: 100,
    height: 100,
    marginBottom: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  logo: {
    width: '100%',
    height: '100%',
    tintColor: '#000000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#2C3E50',
    textAlign: 'center',
  },
  instruction: {
    fontSize: 14,
    color: '#2C3E50',
    marginBottom: 8,
    textAlign: 'left',
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#B86D00',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
  },
  uploadPhotoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 16,
    width: '100%',
  },
  photoButton: {
    backgroundColor: '#D9D9D9',
    borderRadius: 8,
    width: 180,
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  cameraIcon: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  uploadPhotoText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#2C2E35',
    textAlign: 'left',
    marginBottom: 10,
    width: '100%',
  },
  finishButton: {
    backgroundColor: '#B86D00',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#B86D00',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegistrationScreen;
