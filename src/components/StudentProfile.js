import React from 'react'

function StudentProfile({student}) {
    return(
    <>
    <p>{`Student Name: ${student.firstName} ${student.lastName}`}</p>
    </>
    )
}


export default StudentProfile