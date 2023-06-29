'use client'
import React, { useEffect } from 'react'
import ButtonCategory from "../ButtonCategory/ButtonCategory"

const listaCategoria:string[] = [
  "Agências",
  "Chatbot",
  "Marketing Digital",
  "Geração de Leads",
  "Mídia Paga",
]

const ContainerButtons:React.FC = () => {
  const [numeroBotao, setNumeroBotao] = React.useState<number>()

  useEffect(()=>{
    setNumeroBotao(0)
  },[])


  return (
    <section>
      {listaCategoria.map((category:string, index:number) =>(
        <ButtonCategory 
          key={index} 
          name={category}
          setNumeroBotao={setNumeroBotao}
          numero={index}
          estilo={numeroBotao ===index}
          
          />
      ))} 
    </section>
  )
}

export default ContainerButtons