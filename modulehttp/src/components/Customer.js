import React from 'react'
import classes from './Customer.module.css'

const Customer=(props) => {
    
  return(
   
   <li className={classes.customer}>
    <h2>{props.name}</h2>
    <h2>{props.email}</h2>
    <h2>{props.feedback}</h2>
        </li>
        )
  
}

export default Customer