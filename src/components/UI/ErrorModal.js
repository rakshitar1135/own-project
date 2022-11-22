import React from 'react';
import classes from './ErrorModal.module.css';
import Card from './Card';
import Button from './Button';
import ReactDOM  from 'react';
const Backdrop=(props)=>{
    <div className={classes.backdrop} onClick={props.onConfrim}/>
}
const ModalOverLay=(props)=>{
    <Card className={classes.modal}>
    <header className={classes.header}>
        <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
        <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
    <Button onClick={props.onConfrim}>OKAY</Button>
    </footer>
</Card> 
}
const ErrorModal=(props)=>{
    return(
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.onConfrim}/>
        ,document.getElementById('backdrop-root')
        )}
        {ReactDOM.createPortal(<ModalOverLay title={props.title} message={props.message}/>,
        document.getElementById('overLay-root')
        )}
    </React.Fragment>
    );
}

export default ErrorModal