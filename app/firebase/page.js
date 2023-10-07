"use client"
import { useState, useEffect } from "react"
import { collection, addDoc, getDoc, query, where, deleteDoc, doc, updateDoc } from "firebase/firestore"
import { db } from "../../config/firebase"

export default function Firebase() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [course, setCourse] = useState("")



  const [students, setStudents] = useState([])

  const [id, setId] = useState("")

  const [loading, setLoading] = useState(false)

  const fetchDocs = async () => {
    try {
      const collectionName = collection(db, "abc")
      // const queryRef = query(collectionName, where("email","==","naveed@gmail.com"))
      const docs = await getDocs(collectionName)
      const studentsData = []
      docs.forEach((doc) => {
        studentsData.push({
          id: doc.id,
          ...doc.data()
        })
      })
      setStudents(studentsData)
      console.log("students", studentsData)

    } catch (error) {
      console.log("error", error);
    }
  }
  useEffect(() => {
    fetchDocs()
  }, [])

  const onDeletHandler = async (id) => {
    const docRef = doc(db, "abc", id)

    try {
      setId(id)
      setLoading(true)

      await deleteDoc(docRef)


      const newStudents = students.filter((student) => id !== student.id)
      setLoading(false)
      setStudents(newStudents)

    } catch (error) {
      alert("error")
    }
  }

  const onUpdateHandler = async (id) => {
    try {
      const docRef = doc(db, "abc", id)
      setId(id)
      setLoading(true)
      await updateDoc(docRef, {
        email: "naveed@techloset.com"
      })
      fetchDocs()
      setLoading(false)


    } catch (error) {

    }
  }

  const submitButton = async () => {
    let student = {
      name,
      email,
      course
    }
    try {
      const collectionName = collection(db, "abc")

      await addDoc(collectionName, student)
      console.log("Document written with ID: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2 mt-5">
            <input type="text" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} className="form-control" />
            <input type="email" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} className="form-control my-4" />
            <input type="text" placeholder="Enter Your Course" onChange={(e) => setCourse(e.target.value)} className="form-control" />
            <button onClick={submitButton} className="btn btn-success mt-4 px-4">Submit</button>
          </div>
        </div>
        <div className="row">
          <div className="col-8 offset-2 mt-5">
            <div>

              <h1>List of students</h1>

              <table>
                <tr>
                  <td>id</td>
                  <td>Student Name</td>
                  <td>Student email</td>
                  <td>Student course</td>
                  <td>Student delete</td>
                  <td>Student update</td>
                </tr>
                {
                  students.map((student) => {
                    return (

                      <tr>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.course}</td>
                        <td><button onClick={() => onDeletHandler(student.id)}>  {student.id == id && loading ? "loading..." : "delete"}</button></td>
                        <td><button onClick={() => onUpdateHandler(student.id)}>  {student.id == id && loading ? "loading..." : "update"}</button></td>

                      </tr>
                    )
                  })
                }
              </table>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
