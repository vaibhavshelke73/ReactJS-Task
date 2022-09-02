import React from 'react';
import { useSelector } from "react-redux";
import { selectUser } from './features/userSlice';
import "./App.css";
import { Login } from './Components/Login';
import { Logout } from './Components/Logout';

const App = () => {
  const user = useSelector(selectUser);

  return (
    <div>
      {user ? <Logout /> : <Login />}
    </div>
  )
}

export default App
