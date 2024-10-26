
### Toán tử IF else trong JSX
```jsx
{
    1 == 1 : <Text>Điều kiện đúng</Text> : <Text>Điều kiện sai</Text>
}


{
    1 == 1 && <Text>Điều kiện đúng</Text>
}
{
    1 != 1 && <Text>Điều kiện sai</Text>
}

```


### Hàm filter trong JS
sử dụng điều kiện số > 10
```jsx
const numbers = [5, 12, 8, 20, 7];

const filteredNumbers = numbers.filter(number => number > 10);
console.log(filteredNumbers); // Output: [12, 20]
```

### Hàm filter cho search
```jsx
let data = [{name:"nva", ....}]

const search = (keyword) => {
  const searchData = data.filter((item) =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
  setData(searchData);
};

search("nva") // gọi hàm và truyền tham số search
```


### Hàm thêm một đối tượng vào mảng
```jsx

function addItem(item) {
    items.push(item);
}

addItem({ id: "1", name: "Item 1", date: "2024-10-25", isLike: false });
```

### Hàm xoá một đối tượng khỏi mảng bằng id
```jsx
function removeItemById(id) {
    items = items.filter(i => i.id !== id);
}

removeItemById("1");
```

### Hàm chỉnh sửa thuộc tính của một đối tượng


```jsx
function editItemById(id, newProperties) {
    const item = items.find(i => i.id === id);
    if (item) {
        Object.assign(item, newProperties); // Cập nhật các thuộc tính
    }
}

editItemById("2", { name: "Updated Item 2", date: "2024-10-27" });
```

### Hàm chuyển đổi thuộc tính isLike thành true hoặc false

```jsx
function toggleLikeById(id) {
    const item = items.find(i => i.id === id);
    if (item) {
        item.isLike = !item.isLike; // Chuyển đổi giá trị isLike
    }
}

toggleLikeById("1");
```

### Hàm filter và search
```jsx
const filterCaptains = (players) => {
  return players
    .filter(player => player.isCaptain && player.age > 34) // Lọc những người là đội trưởng trên 34 tuổi
    .sort((a, b) => a.MinutesPlayed - b.MinutesPlayed); // Sắp xếp theo MinutesPlayed tăng dần
};

const captainsList = filterCaptains(players);
```


