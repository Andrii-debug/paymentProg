import styles from './Iban.module.css'


function Iban(props) {
    
    return (
        <div className={styles.description}>
            {props.iban}
        </div>
    )
}

export default Iban;