import React from 'react'
import classes from './AddCustomer.module.css';

const AddCustomer = (props) => {
const nameRef = useRef('');
const emailRef = useRef('');
const phoneRef = useRef('');
const feedbackRef = useRef('');

function submitHandler(event) {
    event.preventDefault();
    const customer = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        tel: phoneRef.current.value,
        name: feedbackRef.current.value,
    };
    props.onAddCustomer(customer);
}
  return (
    <form onSubmit={submitHandler}>

        <div className={classes.control}>
        <label htmlfor='name'>Name</label>
        <input type='text' id='name' ref={nameref} />
        </div>

        <div className={classes.control}>
        <label htmlfor='email'>Name</label>
        <input type='text' id='email' ref={nameref} />
        </div>
        
        <div className={classes.control}>
        <label htmlfor='phone'>Name</label>
        <input type='text' id='phone' ref={nameref} />
        </div>

        <div className={classes.control}>
        <label htmlfor='feedback'>Name</label>
        <input type='text' id='feedback' ref={nameref} />
        </div>

        <button type="submit">Add Customer</button>
 
    </form>
  )
}

export default AddCustomer