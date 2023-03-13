import { useState } from 'react';

const Bai7 = () => {
    const [email, setEmail] = useState('a@gmail.com')
    const [users, setUsers] = useState([{ name: 'a', email: 'a@gmail.com' }])

    const onClick = () =>{
        setEmail('bb@gmail.com')
    }
    const onRemove =() => {
        setUsers([])
    }
    return (
        <div>
            <div>Email: {email}</div>
            {users.map((item) => {
                return (
                    <div>
                    <div>Name {item.name} </div>
                     <div>Email {item.email} </div>
                     </div>
                )
            })}
            <button onClick={onClick}>Click</button>
            <button onRemove={onRemove}>Delete</button>
        </div>

    );
  };
  
export default Bai7;