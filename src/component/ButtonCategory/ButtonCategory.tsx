import React from "react";
import styles from "./ButtonCategory.module.css"

interface Button {
    name: string;
    numero: number
    setNumeroBotao: Function
    estilo: boolean
}

const ButtonCategory: React.FC<Button> = ({ name, setNumeroBotao, numero, estilo }) => {

    function handleClick() {
        setNumeroBotao(numero)
    }

    return (
        <button
            onClick={handleClick}
            className={`${styles.ButtonCategory} ${estilo ? "buttonAtivo" : ''}`}>
            {name}
        </button>)
}

export default ButtonCategory