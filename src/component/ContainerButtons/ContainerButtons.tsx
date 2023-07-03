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
      <div>
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
        <p>Ordernar por </p>
        <select name="" id="">
          <option value="">Data da Publicação</option>
        </select>
      </div>
    </section>
  )
}

export default ContainerButtons