import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from "../features/userSlice";
import "./Login.css";

export const Login = () => {
    
const [name, setName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPwd, setconfirmPwd] = useState("");
   
const dispatch = useDispatch();

const handleSubmit = (e) => {
    e.preventDefault();

dispatch(
    login({
    name:name,
    lastName: lastName,
    email:email,
    password:password,
    confirmPwd: confirmPwd,
    loggedIn:true,
})
);
};

return (
<div className="login">
<form className="login_form" onSubmit={(e) => handleSubmit(e)}>

<h1>Login Here</h1>

<input 
type="name" 
placeholder="First Name" 
value={name} 
onChange={(e) => setName(e.target.value)}/>
<input 
type="name" 
placeholder="Last Name" 
value={lastName} 
onChange={(e) => setLastName(e.target.value)}/>

<input 
type="email" 
placeholder="Email"
value={email} 
onChange={(e) => setEmail(e.target.value)}/>

<input 
type="password" 
placeholder="Password"
value={password} 
onChange={(e) => setPassword(e.target.value)}/>

<input
type="password" 
placeholder="Confirm Password"
value={password} 
onChange={(e) => setconfirmPwd(e.target.value)}/>


<button type="submit" className="submit_btn">
Submit
</button>
</form>
</div>
 
)
}

