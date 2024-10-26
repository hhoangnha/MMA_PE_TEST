

### Khai báo useState và sử dụng cơ bản

```jsx
import React, { useState } from 'react'

const [data, setData] = useState([])


function addnew() {
  let newData = {
    id: Date.now().toString(), 
    name: "Nguyễn văn d",
    age: 22,
    isLike: true
  }
  setData([...data, newData]) 
}
```


### Hàm đảo ngược biến boolean trong mảng
sử dụng ```onPress``` trong thẻ ```Pressable``` hoặc ```TouchableOpacity```

Lưu ý: Sử dụng arrow function 

```bash
()=>{
  
}
```


```jsx
<Pressable onPress={() => {
  toggleLike(item.id)
}}>
  <AntDesign name="heart" size={20} color="red" />
</Pressable>
```

```jsx
const toggleLike = (id) => {
  const newData = [...data];
  newData.forEach((item) => {
    if (item.id === id) {
      item.isLike = !item.isLike; // Đảo ngược giá trị isLike
    }
  });
  setData(newData);
};
```

### Hàm dùng để search trả về phần tử theo điều kiện
```jsx
const search = (keyword) => {
  const searchData = data.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
  setData(searchData);
};

```


