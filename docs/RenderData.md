## Hiển thị phần tử dữ liệu ra màn hình

Sử dụng **FlatList** của react-native

Biến **DATA** là mảng dữ liệu

```jsx
import { FlatList } from 'react-native'

<FlatList
        data={DATA || []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          return <></>
        }}

      />
```