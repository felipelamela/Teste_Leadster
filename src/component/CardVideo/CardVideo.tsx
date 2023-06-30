'use client'

import Image from 'next/image'
import React from 'react'
import style from './CardVideo.module.css'

const CardVideo: React.FC = () => {
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
        src="/img/thumbnail.png"
        alt='decri'
        width={362}
        height={204}
        quality={60}

      />
      <span className={`${ativaCard}`}>▶</span>
      <p className={style.textCard}>Como aumentar sua Geração de Leads feat. Traktor</p>
    </div >
  )
}

export default CardVideo