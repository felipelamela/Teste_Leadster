import React from "react";
import styles from "./ButtonCategory.module.css"

interface Button{
    name: string;
    numero:number
}

const ButtonCategory:React.FC<Button> = ({name, numero}) => {
    const [buttonStatus, setButtonStatus] = React.useState(true)


    return ( 
    <button
        className={`${styles.ButtonCategory} ${buttonStatus? 'buttonAtivo': ''}`}>
        {name}
    </button>)
}

export default ButtonCategory