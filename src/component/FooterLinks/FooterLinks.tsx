import Link from 'next/link'
import React from 'react'
import style from './FooterLinks.module.css'
import { IdRandom } from '@/Funcionais'

interface objetoLink {
  title: string
  link: string
}

interface Footer {
  title: string
  namesLink: objetoLink[]
}

const FooterLinks: React.FC<Footer> = ({ title, namesLink }) => {
  return (
    <article>
      <h4 className={style.titleLink}>{title}</h4>
      <div className={style.containerLinks}>
        {namesLink.map((nameL, index) => (
          <a className={style.linkFooter} key={IdRandom()} href="/">{nameL.title}</a>
        ))}

      </div>
    </article>
  )
}

export default FooterLinks