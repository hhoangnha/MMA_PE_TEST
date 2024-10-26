# React Native Navigation Example

This project demonstrates the usage of **Stack** and **Bottom Tab Navigation** in React Native. It includes a simple example with two tabs: **Home** and **Settings**. The **Home** tab contains a button that navigates to a **Details** screen, passing parameters between screens.

## Installation

First, install the required packages:

```bash
npm install @react-navigation/native
npm install @react-navigation/stack @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context
npm install @react-native-community/datetimepicker
npm install @react-native-async-storage/async-storage

```
### Cấu trúc cơ bản màn hình
```bash
├── App.js
├── screens
│   ├── HomeScreen.js
│   ├── DetailsScreen.js
│   └── SettingsScreen.js
```

### Màn hình Bottomtab
```jsx
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@/screens/HomeScreen'
import AddScreen from '@/screens/AddScreen'

const Tab = createBottomTabNavigator();


export function BottomTab() {
  return (
    <Tab.Navigator >
      <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }} />
      <Tab.Screen name="Detail" component={DetailScreen} options={{
        tabBarButton: () => null
      }} />
    </Tab.Navigator>
  );
}

```


### Chuyển màn hình và truyền parameters

Màn hình HomeScreen sẽ khi click nút **"Go detail"** sẽ truyền dữ liệu qua màn hình **Details**
```jsx
function HomeScreen({ navigation }) {
  return (
    <View >
      <Text>Trang chủ</Text>
      <Button
        title="Go detail"
        onPress={() => navigation.navigate('Details', { itemId: 42, message: 'hi' })}
      />
    </View>
  );
}
export default HomeScreen;
```

Màn hình **DetailScreen** sẽ nhận dữ liệu từ màn hình **HomeScreen** chuyển qua thông qua prop **route**
```jsx
function DetailsScreen({ route }) {
  const { itemId, message } = route.params;
  return (
    <></>
  );
}
export default DetailsScreen;
```

## Cấu hình icon cho BottomTab
sử dụng **options** và **tabBarIcon**

```jsx
  <Tab.Screen name="Home" component={HomeScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          )}} />
```


