import styles from './Image.module.css'



function Image(props) {

     

    return (
        <figure className={styles['img_block']}>
               <img src={props.item} alt="icons"/>
                <figcaption></figcaption>
            </figure>
    )
}


export default Image; 