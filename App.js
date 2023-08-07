import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './Component/Homepage';
import Loginpage from './Component/Loginpage';
import Scan from './Component/Scan';
import SplashScreen from './Component/SplashScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash'>
        <Stack.Screen name="Login" component={Loginpage} options={{ headerShown: false }}/>
        <Stack.Screen name="splash" component={SplashScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Scan" component={Scan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App
