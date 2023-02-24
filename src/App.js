
import { useState } from "react";
//function App() { //thay thế bằng arrow function
const App =() => { //su dung arrow function
  const [count, setCount ] = useState(0) //useState là 1 hàm trả về giá trị là 1 biến  và 1 function để gán giá trị cho biến đó
  const [user, setUser] = useState({name: 'A', email: 'a@gmail.com'})
  const [arr, setArr] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
  const [users, setUsers] = useState([{name: 'A', email: 'a@gmail.com'},{name: 'B', email: 'b@gmail.com'},{name: 'C', email: 'c@gmail.com'}])
  const onClick = () => {
    setCount(count + 1) //hàm set là hàm bất đồng bộ, chạy sau lệnh bên dưới
    const newUser = {
      ...user,
      email: `${user.name}${count}@gmail.com`
    }
    setUser(newUser)
  }
  //const onClick2 = () => {
   // const newArr = arr.map((item) => {
   //   return item*2;
  ///  })
  //  setArr(newArr)
 // }

  const onClick2 = () => {
    const newArr = arr.filter((item) => {
      return item % 3 === 0;
    })
    setArr(newArr)
  }
  
  const onClick3 = () => {
    const newUser3 = users.map((item) => {
      if (item.name === 'A'){
        return {name: 'D', email: 'd@gmail.com'}
      }
      return item
    })
    setUsers(newUser3)
  }

  const onClick4 = () => {
    setUsers([
      ...users,
      {name: 'D', email: 'd@gmail.com'}
    ])
  }

 // return (
  // <div>
  //     {arr.map((item) =>{ //map tạo ra 1 mảng mới, biến đổi từng phần tử arr, biến đổi thành thẻ html và render lên giao diện
  //       return (
  //        <div>{item}</div>
  //       )
  //     })
  //     }
  //    <div>Ten la: {user.name}</div>
  //    <div>Email la: {user.email}</div>
  //    <div>Count la: {count}</div>
  //    <button onClick={onClick2}>Click me</button>
  //  </div>
 // );
 return (
  <div>
    {users.map((item) => {
      return (
        <div>
        <div>Ten la: {item.name}</div>
        <div>Email la: {item.email}</div>
        </div>
    )
    })
    }
    <button onClick={onClick4}>Click me</button>
  </div>
 )
  }

export default App;
