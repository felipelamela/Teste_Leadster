'use client'
import React from 'react'
import CardVideo from '../CardVideo/CardVideo'
import style from './CardSec.module.css'
import { NextPage } from 'next'

interface VideoCard {
  id: number,
  categoria: string,
  titulo: string,
  link: string,
  descricao: string,
  data: string,
  thumbnail: string
}


const CardSec: NextPage = () => {
  //CardVideos
  const [videoCard, setVideoCard] = React.useState<VideoCard[]>([])
  const [boxVideo, setBoxVideo] = React.useState<VideoCard[]>([])

  //paginator
  const [pagina, setPagina] = React.useState<number[]>([])
  const [numeroPagina, setNumeroPagina] = React.useState(0)
  const cardPerPagina: number = 9
  const start = ((numeroPagina - 1) * cardPerPagina)
  const end = start + cardPerPagina


  //fetch da api
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/videos.json')
        const data = await response.json();
        setVideoCard(data)
        setNumeroPagina(1)
      } catch (error) {
        console.error("Erro ao acessar dados do JSON", error)
      }
    }
    fetchData()
  }, [])



  //Regando numeros paginação
  React.useEffect(() => {
    const paginaFinal = Math.ceil(videoCard.length / 9)
    for (let index = 1; index <= paginaFinal; index++) {
      setPagina((pagina) => [...pagina, index])
    }
  }, [videoCard])



  //Videos do Box
  React.useEffect(() => {
    const boxVideo = videoCard.slice(start, end)
    setBoxVideo(() => boxVideo)
  }, [numeroPagina])




  // Carregando --- Colocar svg rotativo
  if (videoCard.length === 0) return <>Carregando...</>

  return (
    <section >
      <div className={style.containerCards}>

        {boxVideo.map((video, index) => (
          <CardVideo
            key={index}
            id={video.id}
            titulo={video.titulo}
            thumbnail={video.thumbnail}
          />
        ))}

      </div>
      <div>
        {pagina.map((valor) => (
          <button onClick={() => setNumeroPagina(valor)} key={valor}>{valor}</button>
        ))}
      </div>

    </section>
  )
}

export default CardSec



