
 /*import {useState } from "react";

const Bai2 =() => { 
   const [student, setStudent] = useState({id:'123', score: 10})
     const onClick = () => {
        const newStudent = () => {
            return {
                ...student,
                score: "9"
            }
        }
        setStudent(newStudent) 
    }
 return (
    <div>
       {`Hoc sinh co ma so ${student.id}, diem so la ${student.score}  `}
        <button onClick={onClick}>Click me</button>
    </div>
    
 ); */

 import {useState } from "react";

 const Bai2 =() => { 
     const [student, setStudent] = useState({id:"", score: ''})
     const [studentList, setStudentList] = useState([
         {id:'123', score: 10},
         {id:'456', score: 8},
     ]);
     const onClick = () => {
        console.log(student)
        setStudentList([
             ...studentList,
             student,
            ])
         setStudent({id:"", score:""});
     };
     const onChange = (e) => {
        // const name = e.target.name
        // const value = e.target.value
        //Nhập input -> hàm onChange -> cập nhật useState -> hiển thị input ra màn hình-> 
        //onClick -> student gán vào hàm studentlist -> reset student trống để nhập data khác

        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
     }
     //input nên được control bởi useState, 2 chiều
  return (
     <div>
         <div>
             <input name='id' value={student.id} onChange={onChange}/>  
             <input name='score' value={student.score} onChange={onChange}/>
             <button onClick={onClick}>Add</button>
         </div>
         
     
 
         {studentList.map((item)=>{
             return (
                 <div>
                     <div>Mã số học sinh: {item.id}</div>
                     <div>Điểm số: {item.score}</div>
                 </div>
             );
         })}
     </div>
     
  );
 }
 export default Bai2;