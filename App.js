import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import CourseScreen from './screens/CourseScreen';
import AddCourseScreen from './screens/AddCourseScreen';
import EditCourseScreen from './screens/EditCourseScreen';
import { CourseProvider } from './context/CourseContext'; // Adjust path if necessary

const Stack = createStackNavigator();

export default function App() {
  return (
    <CourseProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="WelcomeScreen"
          screenOptions={{
            headerStyle: { backgroundColor: 'lightblue' },
            headerTitleAlign: 'center',
            headerTitle: () => null,
          }}
        >
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="SignupScreen" component={SignupScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="CourseScreen" component={CourseScreen} />
          <Stack.Screen name="AddCourseScreen" component={AddCourseScreen} />
          <Stack.Screen name="EditCourseScreen" component={EditCourseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </CourseProvider>
  );
}
