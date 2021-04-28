import React, { useState } from 'react'

function StudentForm() {
    const [studentInfo, setStudentInfo] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
        email: '',
    })
  return (
    <div>
      <label>
        First Name
        <input
          type="text"
          name="firstName"
          value={studentInfo.firstName}
          onChange={(e) => setStudentInfo({...studentInfo, firstName: e.target.value})}
        />
      </label>
      <br />
      <label>
        Last Name
        <input
          type="text"
          name="lastName"
          value={studentInfo.lastName}
          onChange={(e) => setStudentInfo({...studentInfo, lastName: e.target.value})}
        />
      </label>
      <br />
      <label>
        Phone Number
        <input
          type="text"
          name="phoneNumber"
          value={studentInfo.phoneNumber}
          onChange={(e) => setStudentInfo({...studentInfo, phoneNumber: e.target.value})}
        />
      </label>
      <br />
      <label>
        Address
        <input
          type="text"
          name="address"
          value={studentInfo.address}
          onChange={(e) => setStudentInfo({...studentInfo, address: e.target.value})}
        />
      </label>
      <br />
      <label>
        Email
        <input
          type="text"
          name="email"
          value={studentInfo.email}
          onChange={(e) => setStudentInfo({...studentInfo, email: e.target.value})}
        />
      </label>
    </div>
  )
}

export default StudentForm
