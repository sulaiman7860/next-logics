"use client"
import { useState } from "react"
import Link from "next/link"

export default function page() {
const [user, setUser] = useState([])





const [userName, setUserName] = useState([
  {
    studentName:"Naveed",
    rollNo:"156",
    section:"A"
  },
  {
    studentName:"Ali",
    rollNo:"212",
    section:"A"
  },
  {
    studentName:"Usman",
    rollNo:"381",
    section:"A"
  },
  {
    studentName:"Zaid",
    rollNo:"321",
    section:"A"
  },
  {
    studentName:"Salman",
    rollNo:"181",
    section:"A"
  }
])

const Delete = (studentRollNo) => {
  setUser([])
  let restStudents = userName.filter((student)=>{
  if(student.rollNo !== studentRollNo){
  return student
}
 })

setUserName(restStudents)
}

  return (
   <div className="container">
    <div className="row">
      <div className="col-8 offset-2">
      <div className="mt-5">

<Link href="/home">Home</Link>
<Link className="mx-3" href="/about">About</Link>
<Link href="/contact">Contact</Link>
{user.map((list,i)=>{
  return (
    <div key={i}>
      <h3>{list.name}</h3>
      <h3>{list.email}</h3>
      <h3>{list.password}</h3>
    </div>
  )
})}







<table>
  <tr>
    <th>Student Name</th>
    <th className="px-3">Roll No</th>
    <th>Section</th>
    <th className="px-3">Delete</th>
  </tr>

{userName.map((student, i)=>{
  return (
    <tr key={i}>
    <td className="h2">{student.studentName}</td>
    <td className="h2 px-3">{student.rollNo}</td>
    <td className="h2">{student.section}</td>
    <td className="h2 px-3"><button className="btn btn-dark" onClick={()=>Delete(student.rollNo)}>Delete</button></td>
    </tr>
  )
})}
</table>

    </div>
      </div>
    </div>
   </div>
  )
}
