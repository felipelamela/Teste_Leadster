'use client'
import React from 'react'
import ButtonCategory from "../ButtonCategory/ButtonCategory"

const listaCategoria:string[] = [
  "Agências",
  "Chatbot",
  "Marketing Digital",
  "Geração de Leads",
  "Mídia Paga",
]

const ContainerButtons:React.FC = () => {

  function handleClick(event:Event, index:number){
    console.log(index)
    console.log(event.target)
  }

  return (
    <section>
      {listaCategoria.map((category:string, index:number) =>(
        <ButtonCategory 
          key={index} 
          name={category}
          numero={index}
          
          />
      ))} 
    </section>
  )
}

export default ContainerButtons