import Link from "next/link"
import FooterLinks from "../FooterLinks/FooterLinks"
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
    title: "Home",
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
    <div>
      <img src="/img/logo.png" alt="" />
      <p>Transformando visitantes em clientes.</p>
    </div>

    <div className={style.containerAllLinks}>
      {listaDeLinks.map(lista => (
        <FooterLinks
          title={lista.title}
          namesLink={lista.links}
        />
      ))}

      <div>
        <h3 className={style.titleLink}>Siga a Leadster</h3>
        <div className={style.containerLinks}>
          <p>links </p>
          <p></p>
          <Link href='/'>Email</Link>
          <Link href='/'>Telefone</Link>
        </div>
      </div>
    </div>


    <div>
      <p>Copyright</p>
      <p>local</p>

    </div>
  </footer>)
}