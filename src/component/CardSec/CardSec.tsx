'use client'
import React from 'react'
import CardVideo from '../CardVideo/CardVideo'
import style from './CardSec.module.css'
import { NextPage } from 'next'
import { IdRandom } from '../../Funcionais'

interface ApiResponse {
  categoria: string,
  titulo: string,
  link: string,
  descricao: string,
  data: string,
  thumbnail: string
}

interface Api {
  Api: ApiResponse[]
}


const CardSec: NextPage<Api> = ({ Api }) => {


  //CardVideos
  const [videoCard, setVideoCard] = React.useState<ApiResponse[]>([])


  //paginator
  const [pagina, setPagina] = React.useState<number[]>([])
  const [numeroPagina, setNumeroPagina] = React.useState(0)
  const cardPerPagina: number = 9



  //Regando numeros paginação
  React.useEffect(() => {
    setPagina([])
    setNumeroPagina(1)
    const paginaFinal = Math.ceil(Api.length / cardPerPagina)
    for (let index = 1; index <= paginaFinal; index++) {
      setPagina((pagina) => [...pagina, index])
    }
  }, [Api])



  //Videos do Box
  React.useEffect(() => {
    const start = ((numeroPagina - 1) * cardPerPagina)
    const end = start + cardPerPagina

    const VideoBox = Api.slice(start, end)
    setVideoCard(VideoBox)
    console.log(Api)
  }, [Api, numeroPagina])





  return (
    <section >
      <div className={style.containerCards}>

        {videoCard.map((video) => (
          <CardVideo
            key={IdRandom()}
            id={IdRandom()}
            titulo={video.titulo}
            thumbnail={video.thumbnail}
          />
        ))}

      </div>
      <div>
        {pagina.map((valor) => (
          <button onClick={() => setNumeroPagina(valor)} key={IdRandom()}>{valor}</button>
        ))}
      </div>

    </section>
  )
}

export default CardSec



