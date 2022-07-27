import React, { useState } from 'react';
import styles from './Card.module.css'
import Button from '../UI/Button';
import ModalForm from '../UI/ModalForm';
import PaidText from '../UI/PaidText';

function Card(props) {

   

    const [text, setText] = useState(false)
    const [modalActive, setModalActive] = useState(false)
    const [paidValText, setPaidValText] = useState(0)
    
    function getValue(data) {

      setModalActive(false)
      setText(true)
      console.log(data);
      const paid = paidValText + parseFloat(data.value)
      
      setPaidValText(paid)
      props.data(data)

  }
  function openModal(data) {
    setModalActive(data)
  }

  function closeModal(data) {
    setModalActive(data)
  } 

    return (
        <React.Fragment>
        {modalActive && <ModalForm getValue={getValue}  closeModal={closeModal} total={props.totalAmount}/>} 
        <div className={styles['card_wrapper']}>
            {props.images}
            {text && <PaidText paid={paidValText}/>}
            {props.items}
            
            <Button onChangeHandler={openModal}/> 
            
          
        </div>
        </React.Fragment>
    )
}


export default Card;