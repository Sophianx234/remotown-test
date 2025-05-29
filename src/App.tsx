import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserList from './ui/UserList'

function App() {
  const [count, setCount] = useState(0)
const users = [
  {
    id: 1,
    name: "Sophian Abdul Rahman",
    email: "sophian@example.com"
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane.doe@example.com"
  },
  {
    id: 3,
    name: "John Smith",
    email: "john.smith@example.com"
  }
];

const [newUser, setNewUser] = useState()
  return (
    <>
      <UserList users={users}/>

      <form >
    <input type="text" name="" id="" />
      </form>
    </>
  )
}

export default App
