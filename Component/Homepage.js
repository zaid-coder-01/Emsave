import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-paper';
import styles from '../style/Homestyle';
const Card = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

const Scan = ({ navigation }) => { // Moved the Scan component definition out
  navigation.navigate('Scan');
};

const HomePage = ({ navigation }) => {
  const handleCardPress = (cardIndex) => {
    navigation.navigate('DetailsPage', { cardIndex });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Button mode="contained" style={styles.button} onPress={() => Scan({ navigation })}>
          connect to device
        </Button>
      </View>
      <View style={styles.row}>
        <Card title="Card 1" onPress={() => handleCardPress(1)} />
        <Card title="Card 2" onPress={() => handleCardPress(2)} />
      </View>
      <View style={styles.row}>
        <Card title="Card 3" onPress={() => handleCardPress(3)} />
        <Card title="Card 4" onPress={() => handleCardPress(4)} />
      </View>
    </ScrollView>
  );
};

export default HomePage;
