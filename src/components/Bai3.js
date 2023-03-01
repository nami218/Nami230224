import { useState } from "react";

const DEFAULT_USER = { name: "", email: "", phone: "" }; //hằng số, ko đổi (viết hoa full)

const TableUsers = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState(DEFAULT_USER);

  const onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
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
  return (
    <div>
      <div>
        <input name="name" value={formData.name} onChange={onChange} placeholder="Input your name" />
        <input name="email" value={formData.email} onChange={onChange} placeholder="Input your email"/>
        <input name="phone" value={formData.phone} onChange={onChange} placeholder="Input your phone"/>
        <button onClick={onClick}>{formData.id ? 'edit' : 'create'}</button>
      </div>
      <table border>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
        </tr>
      {users.map((user) => {
        return (
          <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <button
              onClick={() => {
                onEdit(user);
              }}
            >
              Edit
            </button>
          </tr>
        );
      })}
      </table>
    </div>
  );
};
export default TableUsers;
