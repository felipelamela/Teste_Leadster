import styles from "./ButtonCategory.module.css"

interface Button{
    name: string
}

const ButtonCategory:React.FC<Button> = ({name}) => {

    return <button className={styles.ButtonCategory}>{name}</button>
}

export default ButtonCategory