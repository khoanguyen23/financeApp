import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ToastAndroid, View } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import ProfileScreen from './screens/ProfileScreen';
import NewPage from './screens/NewPage';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    
   <NavigationContainer>
    <Tab.Navigator
    
    screenOptions={({route})=>({
      tabBarIcon:({focused, size, color}) =>{
        let iconName ;
        if(route.name === 'Home') {
          iconName = focused ? 'ios-home' : 'ios-home-outline';
          size = focused? size + 8 : size + 5 ;
        } else if(route.name === 'Profile') {
          iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
          size = focused? size + 8 : size + 5 ;
        } else if(route.name === 'Add') {
          iconName = focused ? 'add-circle' : 'add-circle-outline';
          size = focused? size + 8 : size + 5 ;
        } else if(route.name === 'New') {
          iconName = focused ? 'pie-chart-sharp' : 'pie-chart-outline';
          size = focused? size + 8 : size + 5 ;
        }
        return <Ionic name={iconName} size={size} color={color} />
      },
      headerShown: false,
    })}
    tabBarOptions={{
      activeTintColor:'black',
      inactiveTintColor:'black',
      showLabel:false, 
      styles:{
        backgroundColor:'#000',
        height:60,
      }
    }}
    >
      <Tab.Screen name ="Home" component={HomeScreen} />
      <Tab.Screen name ="Add" component={AddScreen} />
      <Tab.Screen name ="Profile" component={ProfileScreen} />
      <Tab.Screen name ="New" component={NewPage} />
    </Tab.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
