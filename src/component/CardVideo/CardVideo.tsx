'use client'

import Image from 'next/image'
import React from 'react'
import style from './CardVideo.module.css'

interface VideoCard {
  id: string,
  titulo: string,
  thumbnail: string
}



const CardVideo: React.FC<VideoCard> = ({ id, titulo, thumbnail }) => {
  const [ativaCard, setAtivaCard] = React.useState('desativado')

  function handleMouseEnter() {
    setAtivaCard('ativaCard')
  }
  function handleMouseOut() {
    setAtivaCard('desativado')
  }



  return (
    <div
      className={`${style.containerCard} ${ativaCard}`}
      onMouseEnter={event => handleMouseEnter()}
      onMouseLeave={event => handleMouseOut()}
    >
      <Image
        src={thumbnail}
        alt='decri'
        width={362}
        height={204}
        quality={60}

      />
      <span className={`${ativaCard}`}>▶</span>
      <p className={style.textCard}>{titulo}</p>
    </div >
  )
}

export default CardVideo