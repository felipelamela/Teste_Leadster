'use client'
import React from "react"
import ContainerButtons from "../ContainerButtons/ContainerButtons"
import style from './Main.module.css'
import CardSec from "../CardSec/CardSec"
import useFetch from "../useFetch/useFetch"
import Modal from '../Modal/Modal'



export default function Main() {
  const [categoriaAtual, setCategoriaAtual] = React.useState<string>('Agências')

  const { data, setCategory } = useFetch(categoriaAtual)





  return (
    <main className={style.containerMain}>
      <ContainerButtons
        setCategory={setCategory}
      />

      <CardSec
        Api={data}
      />


    </main>)
}
