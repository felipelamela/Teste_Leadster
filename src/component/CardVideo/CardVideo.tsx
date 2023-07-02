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

  function handleMouseEnter() {
    setAtivaCard('ativaCard')
  }
  function handleMouseOut() {
    setAtivaCard('desativado')
  }


  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };





  return (
    <div
      className={`${style.containerCard} ${ativaCard}`}
      onMouseEnter={event => handleMouseEnter()}
      onMouseLeave={event => handleMouseOut()}
      onClick={handleOpenModal}
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

      <div>
        <button onClick={handleOpenModal}>Abrir Modal</button>

        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          categoria={categoria}
          link={link}
          descricao={descricao}
          titulo={titulo}
          thumbnail={thumbnail}
        />


      </div>
    </div >




  )
}

export default CardVideo