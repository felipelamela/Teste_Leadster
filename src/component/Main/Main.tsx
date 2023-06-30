import React from "react"
import CardVideo from "../CardVideo/CardVideo"
import ContainerButtons from "../ContainerButtons/ContainerButtons"
import style from './Main.module.css'
import CardSec from "../CardSec/CardSec"





export default function Main() {


  return (
    <main className={style.containerMain}>
      <ContainerButtons />

      <CardSec />


    </main>)
}