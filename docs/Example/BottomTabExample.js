
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/HomeScreen'
import FavouriteScreen from '@/screens/FavouriteScreen'
import DetailScreen from '@/screens/DetailScreen'

const Tab = createBottomTabNavigator();


export function BottomTab() {
  return (
    <Tab.Navigator screenOptions={{
    }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
    </Tab.Navigator>
  );
}