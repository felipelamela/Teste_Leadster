'use client'
import React from 'react'
import ButtonCategory from "../ButtonCategory/ButtonCategory"
import useFetch from '../useFetch/useFetch'


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
    <section>
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
    </section>
  )
}

export default ContainerButtons