'use client'
import React from 'react'
import ButtonCategory from "../ButtonCategory/ButtonCategory"
import style from "./ContainerButtons.module.css"


const listaCategoria = [
  'Agências',
  'Chatbot',
  'Marketing Digital',
  'Geração de Leads',
  'Mídia Paga',
]

interface Categorias {
  setCategory: Function
}

const ContainerButtons: React.FC<Categorias> = ({ setCategory }) => {
  const [numeroBotao, setNumeroBotao] = React.useState<number>(0)

  return (
    <section className={style.containerButtons}>
      <div className={style.containerButtonDiv}>
      {listaCategoria.map((categoria, index) => (
        <ButtonCategory
          key={categoria}
          name={categoria}
          setNumeroBotao={setNumeroBotao}
          numero={index}
          estilo={numeroBotao === index}
          setCategory={setCategory}

        />
      ))}
      </div>
      <div className={style.containerSelecao}>
        <p className={style.titleSelecao}>Ordernar por </p>
        <select className={style.boxSelecao} name="" id="">
          <option className={style.nomeSelecao} value="">Data da Publicação</option>
        </select>
      </div>
    </section>
  )
}

export default ContainerButtons