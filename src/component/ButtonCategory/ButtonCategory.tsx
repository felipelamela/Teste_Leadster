import React from "react";
import styles from "./ButtonCategory.module.css"
import useFetch from "../useFetch/useFetch"

interface Button {
    name: string;
    numero: number
    setNumeroBotao: Function
    estilo: boolean
    setCategory: Function
}

const ButtonCategory: React.FC<Button> = ({ name, setNumeroBotao, numero, estilo, setCategory }) => {
    function handleClick() {
        setNumeroBotao(numero)
        setCategory(name)

    }
    return (
        <button
            onClick={handleClick}
            className={`${styles.ButtonCategory} ${estilo ? "buttonAtivo" : ''}`}>
            {name}
        </button>)
}

export default ButtonCategory