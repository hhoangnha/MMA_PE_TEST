# React Native AsyncStorage Example

## Installation

First, required packages:

```jsx
import React, {useCallback } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
```

Ví dụ về 2 hàm đặt và lấy dữ liệu từ async storage
```jsx
   await AsyncStorage.setItem('my-key', jsonValue);
   await AsyncStorage.getItem('my-key');
```

## set item
```jsx
const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('my-key', jsonValue);
  } catch (e) {
    // saving error
  }
};
```


## get item
```jsx
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('my-key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
```


# Cách sử dụng

sử dụng mã này ở trang muốn load dữ liệu

```jsx

  // useEffect(() => {
  //   loadCurrentData()
  // }, [])

  useFocusEffect(
    useCallback(() => {
      loadCurrentData();
    }, [])
  );

  async function loadCurrentData(){
    let dataInStore = await AsyncStorage.getItem('list-data');
    setData(JSON.parse(dataInStore))
  }
```


Ví dụ về thêm phần từ vào mảng và set lại asyncstorage
```jsx
  async function addnew() {
    let newData = {
      id: Date.now().toString(),
      name: name,
      age: age,
      isLike: false
    }
    setData([...data, newData])

    /*
      phần này sẽ lấy store cũ và push vào dữ liệu mới sau đó lưu lại
    */
    const currentStore = await AsyncStorage.getItem('list-data');
    const parsedData = currentStore ? JSON.parse(currentStore) : [];

    //push dữ liệu mới vào
    parsedData.push(newData);
    //lưu lại
    const jsonValue = JSON.stringify(parsedData);
    await AsyncStorage.setItem('list-data', jsonValue)
  }

```

Ví dụ về set like và unlike

```jsx
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
};
```

Ví dụ về xoá phần tử ra khỏi store
```jsx
  const deleteItem = async (id) => {
    const currentStore = await AsyncStorage.getItem('list-data');
    const parsedData = currentStore ? JSON.parse(currentStore) : [];

    const newData = parsedData.filter((item) => item.id !== id);
    setData(newData);
    await AsyncStorage.setItem('list-data', JSON.stringify(newData));
  };
```