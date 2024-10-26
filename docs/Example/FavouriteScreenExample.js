import { View, Text, Button, Image, Pressable, FlatList, TextInput, TouchableOpacity } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

export default function FavouriteScreen() {
  const [data, setData] = useState([]);
  useFocusEffect(
    useCallback(() => {
      loadCurrentData();
    }, [])
  );

  async function loadCurrentData() {
    let dataInStore = await AsyncStorage.getItem('list-data');
    const parsedData = dataInStore ? JSON.parse(dataInStore) : [];

    const likedData = parsedData.filter(item => item.isLike === true);
    setData(likedData);
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



  return (
    <View>
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
              </View>
            </View>
          </View>
        }}
      />
    </View>
  )
}