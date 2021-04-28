import React from 'react'
import Welcome from './components/Welcome'
import List from './components/List'
import Greeting from './components/Greeting'
import StudentProfile from './components/StudentProfile'
import StudentForm from './components/StudentForm'

function App() {
  const courseStudents = [
    {
      id: 1,
      firstName: 'Kevin',
      lastName: 'Choi',
      coolShoes: true,
    },
    {
      id: 2,
      firstName: 'Nikki',
      lastName: 'Allen',
      coolShoes: false,
      petName: 'Precious',
    },
  ]
  return (
    <>
      <h1>YOU HAVE MADE IT</h1>
      <Welcome />
      <h2>Course Student Array</h2>
      {courseStudents.map((courseStudent) => (
        <StudentProfile key={courseStudent.id} student={courseStudent} />
      ))}
      <Greeting firstName="Cesar" />
      <List />
      <p>This is React</p>
        <StudentForm />

    </>
  )
}

export default App
