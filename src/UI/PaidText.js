import { useState } from 'react';
import styles from './PaidText.module.css'

function PaidText(props) {



    return (
        <div className={styles.text}>Оплачено : {props.paid}</div>
    )
}

export default PaidText;