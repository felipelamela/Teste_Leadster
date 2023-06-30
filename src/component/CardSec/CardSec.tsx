'use client'
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
  thumbnail: string
}


const CardSec: React.FC = () => {
  const [videoCard, setVideoCard] = React.useState<VideoCard[] | null>(null)

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/videos.json')
        const data = await response.json();
        setVideoCard(data)
      } catch (error) {
        console.error("Erro ao acessar dados do JSON", error)
      }
    }

    fetchData()
  }, [])



  if (!videoCard) return <>Carregando...</>

  return (
    <section className={style.containerCards}>

      {videoCard.map((video, index) => (

        <CardVideo
          key={index}
          id={video.id}
          titulo={video.titulo}
          thumbnail={video.thumbnail}

        />
      ))}

    </section>
  )
}

export default CardSec



