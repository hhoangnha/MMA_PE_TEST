```jsx
import { Image } from 'react-native'

<Image source={require('@/assets/images/react-logo.png')} />

```

![](./images/image-1.png)


Tuỳ chỉnh kích thước hình ảnh và scope ảnh bằng **resizeMode**
```jsx
<Image source={require('@/assets/images/react-logo.png')} style={{width:200, height:200}} resizeMode="center" />

```

