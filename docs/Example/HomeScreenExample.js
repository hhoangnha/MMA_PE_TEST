import { View, Text, Button, Image, Pressable, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

export default function HomeScreen() {

  useFocusEffect(
    useCallback(() => {
      loadCurrentData();
    }, [])
  );

  async function loadCurrentData() {
    let dataInStore = await AsyncStorage.getItem('list-data');
    setData(JSON.parse(dataInStore))
  }


  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  const [data, setData] = useState([]);

  async function addnew() {
    let newData = {
      id: Date.now().toString(),
      name: name,
      age: age,
      isLike: false
    }
    setData([...data, newData])

    const currentStore = await AsyncStorage.getItem('list-data');
    const parsedData = currentStore ? JSON.parse(currentStore) : [];
    parsedData.push(newData);

    const jsonValue = JSON.stringify(parsedData);
    await AsyncStorage.setItem('list-data', jsonValue)
  }

  const toggleLike = async (id) => {
    //lấy từ mảng cũ
    const currentStore = await AsyncStorage.getItem('list-data');
    const parsedData = currentStore ? JSON.parse(currentStore) : [];

    const newData = [...parsedData];
    newData.forEach((item) => {
      if (item.id === id) {
        item.isLike = !item.isLike; // Đảo ngược giá trị isLike
      }
    });
    setData(newData);

    //lưu vào store
    const jsonValue = JSON.stringify(parsedData);
    await AsyncStorage.setItem('list-data', jsonValue)
  };


  const deleteItem = async (id) => {
    const currentStore = await AsyncStorage.getItem('list-data');
    const parsedData = currentStore ? JSON.parse(currentStore) : [];

    const newData = parsedData.filter((item) => item.id !== id);
    setData(newData);
    await AsyncStorage.setItem('list-data', JSON.stringify(newData));
  };


  return (
    <View>
      <TextInput
        style={{ borderWidth: 1, padding: 10, margin: 10 }}
        placeholder='Nhập ....' // in hướng dẫn 
        value={name} // giá trị của input
        onChangeText={(t) => { // biến t là input người dùng nhập
          setName(t)
        }}
      />

      <TextInput
        style={{
          borderWidth: 1, padding: 10, margin: 10,
        }}
        secureTextEntry={true}
        placeholder='Nhập age....' // in hướng dẫn 
        value={age} // giá trị của input
        onChangeText={(t) => { // biến t là input người dùng nhập
          setAge(t)
        }}
      />

      <Button title='add' onPress={addnew} />
      <FlatList
        data={data || []}
        keyExtractor={(item) => item.id.toString()}

        renderItem={({ item, index }) => {
          return <View style={{ margin: 10, }}>
            <View style={{
              flexDirection: 'row', width: "100%", backgroundColor: 'white', justifyContent: 'space-between', shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 4,
              },
              shadowOpacity: 0.30,
              shadowRadius: 4.65,

              elevation: 8,
            }}>
              <View style={{ flex: 1, padding: 20 }}>

                <Text>Fullname: {item.name}</Text>
                <Text>Age: {item.age}</Text>
              </View>
              <View style={{ padding: 20, minWidth: 100 }}>
                {
                  item.isLike && <Pressable onPress={() => {
                    toggleLike(item.id)
                  }}>
                    <AntDesign name="heart" size={20} color="red" />
                  </Pressable>
                }
                {
                  !item.isLike && <Pressable onPress={() => {
                    toggleLike(item.id)
                  }}>
                    <AntDesign name="hearto" size={20} color="red" />
                  </Pressable>
                }

                <Pressable onPress={() => deleteItem(item.id)} style={{ marginLeft: 15 }}>
                  <AntDesign name="delete" size={20} color="black" />
                </Pressable>
              </View>
            </View>
          </View>
        }}

      />




    </View>
  )
}