import Link from 'next/link'
import React from 'react'
import style from './FooterLinks.module.css'

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
          <Link key={index} href={nameL.title}>{nameL.title}</Link>
        ))}

      </div>
    </article>
  )
}

export default FooterLinks