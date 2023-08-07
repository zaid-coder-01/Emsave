import React from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import styles from '../style/styles'
const Loginpage = ({ navigation }) => { // Pass the navigation prop
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const screenWidth = Dimensions.get('window').width;

  const handleLogin = () => {
    // Perform login logic here

    // Then navigate to the Home page
    navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.formContainer, { maxWidth: Math.min(screenWidth, 400) }]}>
        <Text style={styles.signupText}>SIGN UP</Text>
        <TextInput
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
          theme={{ colors: { background: 'white' } }}
        />
        <TextInput
          label="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          theme={{ colors: { background: 'white' } }}
        />
        <Text style={styles.signinText}>Create New ?</Text>
        <Button mode="contained" style={styles.button} onPress={handleLogin}>
          LOGIN
        </Button>
      </View>
    </ScrollView>
  );
};

export default Loginpage;
