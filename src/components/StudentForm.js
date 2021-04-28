import React, { useState } from 'react'
const initialState = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
    email: ''
}

function StudentForm() {
    const [studentInfo, setStudentInfo] = useState(initialState)

    const updateStudent = (value, property) => {
        return setStudentInfo({...studentInfo, [property]: value})
    }

  return (
    <div>
      <label>
        First Name
        <input
          type="text"
          name="firstName"
          value={studentInfo.firstName}
          onChange={e => updateStudent(e.target.value, "firstName")}
        />
      </label>
      <br />
      <label>
        Last Name
        <input
          type="text"
          name="lastName"
          value={studentInfo.lastName}
          onChange={(e) => updateStudent(e.target.value, "lastName")}
        />
      </label>
      <br />
      <label>
        Phone Number
        <input
          type="text"
          name="phoneNumber"
          value={studentInfo.phoneNumber}
          onChange={(e) => updateStudent(e.target.value, "phoneNumber")}
        />
      </label>
      <br />
      <label>
        Address
        <input
          type="text"
          name="address"
          value={studentInfo.address}
          onChange={(e) => updateStudent(e.target.value, "address")}
        />
      </label>
      <br />
      <label>
        Email
        <input
          type="text"
          name="email"
          value={studentInfo.email}
          onChange={(e) => updateStudent(e.target.value, "email")}
        />
      </label>
    </div>
  )
}

export default StudentForm
