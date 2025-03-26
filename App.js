import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput,KeyboardAvoidingView,Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Welcome from './react native project/Log in screens/Welcome'
import login from './react native project/Log in screens/login'
import register from './react native project/Log in screens/register';
import maps from './react native project/maps/map';
import Forgetpassword from './react native project/Log in screens/Forgetpassword'
import Setnewpassword from './react native project/Log in screens/Setnewpassword';
import homescreen from './react native project/chatbot/homescreen';

import 'react-native-get-random-values';
import 'react-native-reanimated';


const Stack=createNativeStackNavigator ();

export default function App() {
      return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Welcome'>
                <Stack.Screen name='Welcome' component={Welcome} />
                <Stack.Screen name='login' component={login}/>
                <Stack.Screen name='register' component={register}/>
                <Stack.Screen name='maps' component={maps}/>
                <Stack.Screen name='Forgetpassword' component={Forgetpassword}/>
               <Stack.Screen name='Setnewpassword' component={Setnewpassword}/>
               <Stack.Screen name='homescreen' component={homescreen}/>
            </Stack.Navigator>
        </NavigationContainer>
      );
      }
      