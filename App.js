import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AllExpenses from './screens/AllExpenses';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='AllExpenses' component={AllExpenses} />
      {/* <Tab.Screen name='ManageExpenses' component={ManageExpenses} /> */}
      <Tab.Screen name='RecentExpenses' component={RecentExpenses} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <>
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name='BottomNav' component={BottomTabs} options={{
            headerShown: false,
          }} />
          <Stack.Screen name='ManageExpenses' component={ManageExpenses} options={{
            title: 'All Expenses',
            
          }} />
          
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  
});
