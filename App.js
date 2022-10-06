import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign, Entypo } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';
import AllExpenses from './screens/AllExpenses';
import ManageExpenses from './screens/ManageExpenses';
import RecentExpenses from './screens/RecentExpenses';
import { GlobalStyles } from './constants/styles';
import { Provider, useSelector } from 'react-redux';
import { store } from './store/store';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: { borderTopLeftRadius: 25, borderTopRightRadius: 25, height: 70, elevation: 4, backgroundColor: GlobalStyles.colors.white, },

    }}>
      <Tab.Screen name='AllExpenses' component={AllExpenses} options={{
        tabBarIcon: ({ focused, size }) => <Entypo name='bar-graph' size={size} color={focused ? GlobalStyles.colors.blue : GlobalStyles.colors.gray} />,
        title: "All Expenses",
        headerTintColor: GlobalStyles.colors.blueDark,
        

      }} />
      <Tab.Screen name='ManageExpenses' component={ManageExpenses} options={{
        tabBarIcon: ({ focused, size }) => <Ionicons style={{...styles.icon, ...(focused && styles.focused )}} name="add-outline" size={size + 14} color={focused ? GlobalStyles.colors.white : GlobalStyles.colors.blue} />,
        title: "Manage Expenses",
        headerTintColor: GlobalStyles.colors.blueDark,
        
      }} />
      {/* <Tab.Screen name='ManageExpenses' component={ManageExpenses} /> */}
      <Tab.Screen name='RecentExpenses' component={RecentExpenses} options={{
        tabBarIcon: ({ focused, size }) => <AntDesign name="clockcircle" size={size} color={focused ? GlobalStyles.colors.blue : GlobalStyles.colors.gray} />,
        title: "Recent Expenses",
        headerTintColor: GlobalStyles.colors.blueDark,

      }} />
    </Tab.Navigator>
  )
}

export default function App() {

  return (
    <>
      <Provider store={store}>
        <NavigationContainer >
          <Stack.Navigator>
            <Stack.Screen name='BottomNav' component={BottomTabs} options={{
              headerShown: false,
            }} />
            <Stack.Screen name='ManageExpenses' component={ManageExpenses} options={{
              title: 'Manage Expenses',

            }} />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: GlobalStyles.colors.whiteBlue,
    padding: 6,
    paddingHorizontal: 7,
    borderRadius: 30,
    position: 'absolute',
    top: -24,
    },
    focused: {
      backgroundColor: GlobalStyles.colors.blue,
    }
});
