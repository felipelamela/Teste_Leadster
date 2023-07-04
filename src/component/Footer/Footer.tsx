import FooterLinks from "../FooterLinks/FooterLinks"
import { IdRandom } from "@/Funcionais"
import style from "./Footer.module.css"

interface objetoLink {
  title: string,
  link: string
}

interface objLink {
  title: string,
  links: objetoLink[]
}


const listaDeLinks: objLink[] = [
  {
    title: "Links Principais",
    links: [{
      'title': 'Home',
      'link': '/'
    },

    {
      'title': 'Ferramenta',
      'link': '/'
    },
    {
      'title': 'Preços',
      'link': '/'
    },
    {
      'title': 'Contato',
      'link': '/'
    },]
  },
  {
    title: "Cases",
    links: [
      {
        'title': 'Geração de Leads B2B',
        'link': '/'
      },

      {
        'title': 'Geração de Leads em Software',
        'link': '/'
      },
      {
        'title': 'Geração de Leads em Imobiliária',
        'link': '/'
      },
      {
        'title': 'Cases de Sucesso',
        'link': '/'
      },
    ]

  },
  {
    title: "Materiais",
    links: [
      {
        'title': 'Blog',
        'link': '/'
      },

      {
        'title': 'Parcerias com Agências',
        'link': '/'
      },
      {
        'title': 'Guia Definitivo do Marketing',
        'link': '/'
      },
      {
        'title': 'Materiais Gratuitos',
        'link': '/'
      },
    ]
  }


]



export default function Footer() {
  return (<footer className={style.containerFooter}>
    <div className={style.titleFooterContainer}>
      <img src="/img/logo.png" alt="" />
      <p className={style.paragrafoFooter}>Transformando visitantes em clientes.</p>
    </div>

    <div className={style.containerAllLinks}>


      {listaDeLinks.map(lista => (
        <FooterLinks
          key={IdRandom()}
          title={lista.title}
          namesLink={lista.links}
        />
      ))}


      <div>
        <h4 className={style.titleLink}>Siga a Leadster</h4>
        <div className={style.containerLinks}>
          <div className={style.containerIcon}>
            <span className={style.boxImg}><img className={style.icon} src="/img/iconLinks/linkedin.svg" alt="" /></span>
            <span className={style.boxImg}><img className={style.icon} src="/img/iconLinks/facebook.svg" alt="" /></span>
            <span className={style.boxImg}><img className={style.icon} src="/img/iconLinks/instagram.svg" alt="" /></span>
          </div>
          <p className={style.contato} >Email: <span>contato@leadster.com.br</span></p>
          <p className={style.contato} >Telefone: <span>(42) 98828-9851</span></p>
        </div>
      </div>
    </div>


    <div className={style.containerCopy}>
      <p className={style.copyfooter}>Copyright© 2015 - 2022 Todos os direitos reservados | <span className={style.detalheFooter}>Leadster</span> </p>
      <p className={style.copyfooter}>Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 80010-000 | Termos de uso</p>
    </div>
  </footer>)
}


/*


*/