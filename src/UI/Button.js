import { useState } from 'react';
import styles from './Button.module.css'


function Button(props) {

 
  
    function onChangeHandler() {       
      props.onChangeHandler(true)
    }

    return (
   
        <button className={styles.btn} onClick={onChangeHandler}>Сплатити</button>
     
    )
}

export default Button;