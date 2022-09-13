import React, { useRef, useState } from "react";
import ErrorModal from "../Ul/ErrorModal";
import Wrapers from "../Helpers/Wraper";

import Button  from "../Ul/Button";
import Card from "../Ul/Card"
import classes from "./AddUser.module.css"


const AddUser =(props)=>{
    const nameInputRef=useRef();
    const  ageInputRef=useRef();
//const [enteredName,setEnteredName]=useState("");
//const [enteredAge,setEnteredAge]=useState("");
const [error,setError]=useState();

//const usernameChangeHandler=(event)=>
//{
  //  setEnteredName(event.target.value)
//}

//const ageChangeHandler=(event)=>
//{
  //  setEnteredAge(event.target.value)
//}

  const addUserHandler=(event)=>{
    event.preventDefault();
    const enteredName=nameInputRef.current.value;
    const enteredAge=ageInputRef.current.value;
  
    if(enteredName.trim().length===0 || enteredAge.trim().length===0)
    {
        setError(
            {
            title:"Invalid Input",
            message:"The fields are required"
            }
            )
            return;
    }
    
    if(+enteredAge<1)
    
    {
        setError(
            {
            title:"Invalid Age",
            message:"The age should be non negative"
            }
            )
    
     return;
    }

    props.onAddUser(enteredName,enteredAge);
    //setEnteredAge("");
    //setEnteredName("");
    nameInputRef.current.value="";
    ageInputRef.current.value="";
  };
const errorHandler=()=>
{
    setError(null);
}

return(
    <React.Fragment>
<div>
        {
    error && (
    <ErrorModal
    title={error.title}
    message={error.message}
    onConfirm={errorHandler}></ErrorModal>
        )
        }
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" 
        //onChange={usernameChangeHandler} 
        //value={enteredName}
        ref={nameInputRef}
        />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" 
        //onChange={ageChangeHandler} 
        //value={enteredAge}
        ref={ageInputRef} 
        />
        <Button type="submit">Add User</Button>
    </form>
    </Card>
</div>
</React.Fragment>
   )

}

export default AddUser