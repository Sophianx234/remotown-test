import { useState } from 'react'
import './App.css'
import UserList, { type userInfo } from './ui/UserList'

function App() {
  const [count, setCount] = useState<number>(0)
let usersData = [
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

const [newUser, setNewUser] = useState({
  name:'',
  email:''
})
const [users, setUsers] = useState<userInfo[]>(usersData)
function handleAddNewUser(newUser){
   newUser = {...newUser,id:users.length+1}
   setUsers(users=>[...users,newUser])
  

}
  return (
    <div className='container'>
      <UserList users={users}/>


      <form className='form' >
        <label htmlFor="username">

    <input type="text" onChange={e=>setNewUser(user=>({...user,name:e.target.value}))} placeholder='Username' name="" id="username" />
        </label>
        <label htmlFor="email" className=''>

    <input type="email" onChange={e=>setNewUser(user=>({...user,email:e.target.value}))} placeholder='user@example.com' name="" id="email" />
        </label>
      </form>
      <button onClick={()=>handleAddNewUser(newUser)} >Add User</button>
    </div>
  )
}

export default App
