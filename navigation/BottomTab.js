
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/HomeScreen'
import FavouriteScreen from '@/screens/FavouriteScreen'
import DetailScreen from '@/screens/DetailScreen'

const Tab = createBottomTabNavigator();


export function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{
      // headerShown: false,
      // tabBarShowLabel: false,
      // tabBarActiveTintColor: 'red',
      // tabBarInactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Home" component={HomeScreen} />

      <Tab.Screen name="Favourite" component={FavouriteScreen} />

      <Tab.Screen name="Detail" component={DetailScreen} />
    </Tab.Navigator>
  );
}