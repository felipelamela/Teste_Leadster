import React from 'react'
import CardVideo from '../CardVideo/CardVideo'
import style from './CardSec.module.css'

interface VideoCard {
  id: number,
  categoria: string,
  titulo: string,
  link: string,
  descricao: string,
  data: string,
}


const CardSec: React.FC = () => {
  const [videoCard, setVideoCard] = React.useState<VideoCard[] | null>(null)


  




  return (
    <section className={style.containerCards}>

      <CardVideo />
      <CardVideo />
      <CardVideo />
      <CardVideo />


    </section>
  )
}

export default CardSec



