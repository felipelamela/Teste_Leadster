'use client'
import React from 'react'
import CardVideo from '../CardVideo/CardVideo'
import style from './CardSec.module.css'
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


const CardSec: React.FC<Api> = ({ Api }) => {


  //CardVideos
  const [videoCard, setVideoCard] = React.useState<ApiResponse[]>([])


  //paginator
  const [pagina, setPagina] = React.useState<number[]>([])
  const [numeroPagina, setNumeroPagina] = React.useState(0)
  const [cardPerPagina, setCardPerPagina] = React.useState<number>(9)



  //modificador de quantidade de cards na tela
  React.useEffect(() => {
    const userAgent = window.navigator.userAgent
    if (/iPhone|Android|webOS|BlackBerry|Windows Phone|Opera Mini|IEMobile|Mobile/i.test(userAgent)){
      setCardPerPagina(4)
    }
  }, [])


  //Gegando numeros paginação
  React.useEffect(() => {
    setPagina([])
    setNumeroPagina(1)
    const paginaFinal = Math.ceil(Api.length / cardPerPagina)
    for (let index = 1; index <= paginaFinal; index++) {
      setPagina((pagina) => [...pagina, index])
    }
  }, [Api, cardPerPagina])



  //Videos do Box
  React.useEffect(() => {
    const start = ((numeroPagina - 1) * cardPerPagina)
    const end = start + cardPerPagina

    const VideoBox = Api.slice(start, end)
    setVideoCard(VideoBox)
  }, [Api, numeroPagina, cardPerPagina])


  //Paginação
  const paginator = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement
    if (target instanceof HTMLButtonElement) {
      const innerText = Number(target.innerText);
      setNumeroPagina(innerText)
    }
  }

  return (
    <section >
      <div className={style.containerCards}>

        {videoCard.map((video) => (
          <CardVideo
            key={IdRandom()}
            categoria={video.categoria}
            link={video.link}
            descricao={video.descricao}
            titulo={video.titulo}
            thumbnail={video.thumbnail}
          />
        ))}

      </div>


      <div className={style.containerPaginator}>
        <p className={style.paginator}>Página</p>
        <div>
          {pagina.map((valor) => (
            <button
              className={`${style.buttonPaginator} ${valor === numeroPagina ? "paginaAtiva" : ``}`}
              onClick={event => paginator(event)}
              key={IdRandom()}>
              {valor}
            </button>
          ))}
        </div>
      </div>



    </section>
  )
}

export default CardSec



