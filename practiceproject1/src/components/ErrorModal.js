import React from 'react'
import Card from "./Ul/Card";
import Button from './Ul/Button';
import classes from './ErrorModal.module.css'

const ErrorModal = (props) => {
  return (
    <div>
        <div className={classes.backdrop}></div>
        <Card className={classes.modal}>
        <header className={classes.header}>
        <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <button onClick={props.onConfirm}>Okay<button>
        </footer>
        </Card>
        

    </div>
  )
};

export default ErrorModal;