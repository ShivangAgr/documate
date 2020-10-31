import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeMenu from './src/screens/HomeMenu';
import CreateMenu from './src/screens/CreateMenu';
import ModMenu from './src/screens/ModMenu';
import SelectPDF from './src/screens/SelectPDF';
import SelectText from './src/screens/SelectText';
import SelectImages from './src/screens/SelectImages';
import ImagesPreview from './src/screens/ImagesPreview';

const Stack = createStackNavigator();

const App = () => {
  console.log('App');

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={{
        colors: { background: "#E5E5F0", },
      }}>
        <Stack.Navigator screenOptions={{
          header: () => { },
        }}>
          <Stack.Screen name="HomeMenu" component={HomeMenu} />
          <Stack.Screen name="CreateMenu" component={CreateMenu} />
          <Stack.Screen name="ModMenu" component={ModMenu} />
          <Stack.Screen name="SelectPDF" component={SelectPDF} />
          <Stack.Screen name="SelectText" component={SelectText} />
          <Stack.Screen name="SelectImages" component={SelectImages} />
          <Stack.Screen name="ImagesPreview" component={ImagesPreview} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
