import React from 'react'
import style from "./DescriSec.module.css"

const DescriSec = () => {
  return (
    <section className={style.containerDescri}>
      <img className={style.imgDescri} src='img/comparativo_img_CTA.png' alt="" />
      <div className={style.containerTextDescri}>
        <div className={style.TextDecri}>
          <h3 className={style.titleDescri}>Pronto para triplicar sua <strong>Geração de Leads?</strong></h3>
          <p className={style.paragrofoDescri}>Criação e ativação em<strong> 4 minutos</strong>.</p>
        </div>
        <div className={style.containerButton}>
          <button className={style.buttonDescri}>Ver Demonstração</button>
          <img className={style.seloButtonDescri} src="img/selo_RD.png" alt="" />
        </div>
        <div className={style.containerDetalheDescri}>
          <div className={style.detalheDescri}>
            <img src="img/no-card-dark.webp" alt="" />
            <p><strong>Não</strong> é necessário Cartão de Crédito</p>
          </div>
          <span className={style.spanDescri}>|</span>
          <div className={style.detalheDescri}>
            <img src="img/rating.webp" alt="" />
            <p>4.9/5 média de satifação</p>
          </div>
        </div>
      </div>


    </section>
  )
}

export default DescriSec