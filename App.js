import  React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './Components/WelcomeScreen';
import ChatScreen from './Components/ChatScreen';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator>
        {/* welcome screen */}
        {/* <Stack.Screen 
        options={{
          cardStyle:{backgroundColor:"white"}
        }}
         name='Welcome' component={WelcomeScreen} /> */}

         {/* Chat screen */}
         <Stack.Screen  name='Chat' component={ChatScreen}/>

      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:100
  },
});
