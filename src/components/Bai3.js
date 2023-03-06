import {useEffect, useState, useMemo } from "react";
import FormUser from "./FormUser"
import TableUserList from "./TableUserList"


const DEFAULT_USER = { name: "", email: "", phone: "" }; //hằng số, ko đổi (viết hoa full)

const TableUsers = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState(DEFAULT_USER);
  //const [searchUserList, setsearchUserList] = useState([]);
  const [keyword, setKeyword] = useState('');
  
 const searchUserList = useMemo(() => {
    if(keyword !== ''){
      const newUsers = users.filter((item) => {
       // return item.name === keyword //search nguyên cụm từ
       return item.name.includes(keyword) || item.email.includes(keyword)  //search từng từ riêng lẻ
      })
      return newUsers
    }
    else {
      return users
    }

  }, [keyword, users])

 //function: động từ. biến: danh từ
  const onClick = () => {
    if (formData.id) {
      
      const newUsers = users.map((user) => {
        if (user.id === formData.id) {
          return formData;
        }
        return user;
      });
      setUsers(newUsers);
    } else {
      setUsers([
        ...users,
        {
          id: Math.random(), //gán id là 1 số bất kỳ vào users.id
          ...formData,
        },
      ]);
    }

    setFormData(DEFAULT_USER);
  };

  const onEdit = (selectorUser) => {
    setFormData(selectorUser);
  };
  const onDelete = (item) => { // xóa dữ liểu
    const newUserList = users.filter((user) =>{ //so sánh xem id của mảng cũ và id của phần tử cần xóa có giống nhau k, nếu có giống nhau thì trả về mảng mới
      return user.id !== item.id //hàm mặc định true: có giá trị, true, lớn hơn 0 (khác 0), string khác rỗng
    }) //hàm mặc định fasle: ko có giá trọ, null, undefined, === 0, strong rỗng
    // if (!!userList.length) => biến các điều kiện trở về true hoặc fasle
    setUsers(newUserList) //sau khi cho vào mảng mới, gọi hàm setUsers để update dữ liệu
  }
  const onSearch = (e) => {
    setKeyword(e.target.value)

  }
  return (
    <div style={{padding : 30}}>
        <FormUser formData={formData} setFormData={setFormData} onClick={onClick}/>
        <input value={keyword} onChange={onSearch}/>

       <TableUserList users={searchUserList} onEdit={onEdit} onDelete={onDelete}/> 
    </div>
  ); //TableUserList: chỉ hiển thị danh sách search
}; 
export default TableUsers;

