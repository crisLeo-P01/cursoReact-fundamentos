import styles from './Card.module.sass'

const CardModule = () => {
    return (
        <>
            <p className={styles.texto}>Soy un card</p>
            <p className='bg-orange-100 text-orange-500'>Texto con clases de tailwind</p>
        </>
    )
}

export default CardModule