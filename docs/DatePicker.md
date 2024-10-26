## Datepicker dùng để chọn ngày giờ

```jsx
import DateTimePicker from '@react-native-community/datetimepicker';
```

## Sử dụng

* Tạo 2 biến, 1 biến dùng để lưu trữ thời gian
* 1 biến để lưu trữ trạng thái ẩn hiện của picker

```jsx
  const [date, setDate] = useState(new Date())
  const [showDate, setShowDate] = useState(false)

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(false);
    setDate(currentDate);
  };
```

mã picker đưa vào trong view
```jsx
 {
        showDate && <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
        />
      }
```


Tạo nút, khi click vào sẽ hiển thị picker lên 
```jsx
  <TouchableOpacity
        onPress={() => {
          setShowDate(true)
        }}
      >
        <View
          style={{ borderWidth: 1, padding: 10, margin: 10 }}>
          <Text>{date.toDateString()}</Text>
        </View>
      </TouchableOpacity>
```