
import MainHeader from './components/MainHeader/MainHeader';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { useEffect } from 
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn]= useState(false);

  useEffect(()=>{
    const storedInfo=localStorage.getItem("isLoggedIn");
    if(storedInfo==="1")
    {
      setIsLoggedIn(true);
    }
    },[])

  const loginHandler = (email,password) => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn","1");
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn","0");
  };

  return (<>
      <MainHeader isAuthenticated={isLoggedIn}
      onLogout={logoutHandler}/>
    <main>{!isLoggedIn && <Login onLogin={loginHandler}/>}
      {isLoggedIn && <Home onLogout={logoutHandler}/>}
      </main>
    </>
  );
}

export default App;
