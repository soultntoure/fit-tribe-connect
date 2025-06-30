import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomePageMobile from './src/screens/HomePageMobile';
import ClassListScreen from './src/screens/ClassListScreen';
import ClassDetailScreen from './src/screens/ClassDetailScreen';
import LoginScreen from './src/screens/LoginScreen';
import CommunityScreen from './src/screens/CommunityScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePageMobile} options={{ title: 'Fit Tribe Connect' }} />
        <Stack.Screen name="ClassList" component={ClassListScreen} options={{ title: 'Find Classes' }} />
        <Stack.Screen name="ClassDetail" component={ClassDetailScreen} options={({ route }) => ({ title: route.params.className || 'Class Details' })} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Community" component={CommunityScreen} options={{ title: 'Class Community' }} />
        {/* Add other mobile-specific screens */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
