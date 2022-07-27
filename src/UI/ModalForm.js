import React, { useState } from "react";
import styles from "./ModalForm.module.css";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div className={styles['modal_wrapper'] } onClick={props.modalHandler} />
}

// const Modal = (props) => {
//     return <form className={styles['form_container']}>
//     <h5>Впишіть сумму для оплати</h5>
//     <input type="text" />
//     <button>Оплата</button>
//     </form>
// }
// 
// {ReactDOM.createPortal(<Modal/>, document.getElementById('modal'))}


function ModalForm(props) {


  const [activeModal, setActiveModal] = useState(false)
  const [inputValue, setInputValue] = useState(0)
  const [errorText, setErrorText] = useState(false)
  function openModal(data) {
      setActiveModal(data)
  }

  
  function getValue(e) {

    setInputValue(e.target.value)
    console.log(e.target.value);

  }

  function closeModal(e) {
    props.closeModal(false)
  }

  function submitHandler(e) {
    e.preventDefault()
    if (inputValue > props.total) {
      setErrorText(true)
      setActiveModal(true)
      return
    }
    
     const data = {
      value: inputValue,
      
    }

    props.getValue(data)
  }


  return (
    <React.Fragment >  
      
        {ReactDOM.createPortal(<Backdrop modalHandler={closeModal}/>, document.getElementById('backdrop' ))}
          <form className={styles["form_container"]} onSubmit={submitHandler}> 
        <div className={styles.closeModal} onClick={closeModal}></div>
        {errorText && <div className={styles.errorText}>На Вашому рахунку бракує коштів для оплати.</div>}
          <h3>Впишіть сумму для оплати</h3>
          <input type="number"  onChange={getValue}/>
          <button className={styles.btn}>Оплата</button>
          </form> 
          
      
      
    </React.Fragment>
  );
}

export default ModalForm;
