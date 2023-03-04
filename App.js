import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// screens

import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';
import Error from './screens/Error';


//React navigation stack

import RootStack from './navigators/RootStack';
export default function App() {
  return <RootStack />;
}


