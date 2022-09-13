import './App.css';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';
import { useState } from 'react';

function App() {
  const [users,setUsers]=useState([]);//state
  const addUserHandler=(uName,uAge)=>
  {
    setUsers((prevUsers)=>
    {
      return[...prevUsers,{name:uName,age:uAge,id:Math.random.toString()}]
    })
  }

  return (
   <>
    <AddUser onAddUser={addUserHandler}></AddUser>
    <UserList users={users}></UserList>
   </>
  );
}

export default App;
