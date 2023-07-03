import style from './TitleSec.module.css'


export default function TitleSec() {


    return (
        <section className={style.containerTitle}>
            <p className={style.textTitle}>Webinars Exclusivos</p>
            <h2 className={style.titleSec}>Menos Conversinha, <br /><span>Mais Conversão</span><img src="/img/asset-header.png" alt="" /></h2>
            <p>Conheça as estratégias que <strong>mudaram o jogo</strong> e como alicá-las no seu negócio.</p>
        </section>
    )
}