import React from 'react'

function StudentProfile({ student }) {
  return (
    <>
      <p>{`Student Name: ${student.firstName} ${student.lastName}`}</p>
      <p>{`Cool Shoes: ${student.coolShoes ? 'Yes' : 'No'}`}</p>
      {/* <p>{`Pet Name: ${student.petName || 'No Pet'}`}</p> */}
      {student.petName && <p>{`Pet Name: ${student.petName}`}</p>}
    </>
  )
}

export default StudentProfile
