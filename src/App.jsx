import './App.css'
import Header from './components/Header'
import Student from './components/Student'

function App() {
  const students = [
  { name: 'Roy', grade: 'A', status:"" },
  { name: 'Anna', grade: 'A',status:"" },
  { name: 'Sam', grade: 'B',status:"" }
];
  return (
    <>
      <Header/>
      {students.map((s, i) => (
        <Student key={i} student={s} />
      ))}
    </>
  )
}

export default App