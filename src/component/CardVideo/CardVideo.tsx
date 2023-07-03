'use client'

import Image from 'next/image'
import React from 'react'
import style from './CardVideo.module.css'
import Modal from '../Modal/Modal'

interface ApiResponse {
  categoria: string,
  titulo: string,
  link: string,
  descricao: string,
  thumbnail: string
}
const CardVideo: React.FC<ApiResponse> = ({ titulo, thumbnail, categoria, link, descricao }) => {
  const [ativaCard, setAtivaCard] = React.useState('desativado')
  const [open, setOpen] = React.useState(false)

  function handleMouseEnter() {
    setAtivaCard('ativaCard')
  }
  function handleMouseOut() {
    setAtivaCard('desativado')
  }

  return (
    <>
      <div
        className={`${style.containerCard} ${ativaCard}`}
        onMouseEnter={event => handleMouseEnter()}
        onMouseLeave={event => handleMouseOut()}
        onClick={event => setOpen(true)}
      >
        <Image
          src={thumbnail}
          alt='decri'
          width={362}
          height={204}
         className={style.imgCard}
        />
        <span className={`${ativaCard}`}>▶</span>
        <p className={style.textCard}>{titulo}</p>


      </div >

      <Modal
        titulo={titulo}
        link={link}
        descricao={descricao}
        open={open}
        setOpen={setOpen}
      />
    </>
  )
}

export default CardVideo