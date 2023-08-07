import React,{useEffect} from 'react';
import { View, Image, StyleSheet } from 'react-native';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('Login')
        }, 3000); 
      }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../assests/splash.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF', // Set your desired background color
  },
  image: {
    width: '80%', // Adjust the width as needed
    height: '80%', // Adjust the height as needed
  },
});

export default SplashScreen;
