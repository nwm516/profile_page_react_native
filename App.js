import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Image, Text, TextInput, View, Button, Alert } from 'react-native';

export default function App() {
  const [text, onChangeText] = useState('What kind of drink should the robot try next?');
  const [secondText, onChangeSecondText] = useState('What should the robot\'s name be?');

  return (
    <View style={styles.container}>

      <Text style={styles.titleContainer}>Coffee Robot</Text>
      <StatusBar style="auto" />
      
      <Image
        style={styles.smallerImg}
        source={{
          uri: 'https://img.freepik.com/premium-vector/cute-cartoon-robot-with-coffee_634248-823.jpg',
        }}
      />

      <ScrollView>
        <Text style={styles.storyText}>This is a story about a coffee-loving robot.</Text>

        <Text style={styles.storyText}>
          Though he couldn't taste the sweet flavors present within his morning coffee, his circuits loved the liquid
          nonetheless.
        </Text>

        <Text style={styles.storyText}>No other caffeinated drink made this curious robot feel this way.</Text>
        
        <Text style={styles.storyText}>Not energy drinks or tea. Coffee was the only drink for this one!</Text>
        
        <Text style={styles.storyText}>
          Despite his love for the drink, he did wonder what else was out there that could appeal to his interests...
        </Text>
        
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="What kind of drink should the robot try next?"
        />

        <TextInput
          style={styles.input}
          onChangeText={onChangeSecondText}
          value={secondText}
          placeholder="What do you think the robot's name should be?"
        />

        <Button
          title="Submit"
          onPress={() => Alert.alert('Thank you for your answers!')}
          />

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9CC',
    alignItems: 'center',
  },
  titleContainer: {
    padding: 8,
    margin: 20,
    backgroundColor: 'white',
    color: '#8b0000',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  storyText: {
    padding: 10,
    margin: 20,
    backgroundColor: 'white',
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  smallerImg: {
    marginBottom: 30,
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  input: {
    padding: 10,
    margin: 20,
    backgroundColor: 'white',
    color: '#000000',
    fontSize: 12,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
  },
});
