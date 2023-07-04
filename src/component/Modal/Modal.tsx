import React from 'react';
import style from "./Modal.module.css"


interface Modal {
  titulo: string,
  link: string,
  descricao: string,
  open: boolean
  setOpen: Function
}

const Modal: React.FC<Modal> = ({ titulo, link, descricao, open, setOpen }) => {
  const modalRef = React.useRef<HTMLDivElement | null>(null);


  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  function handleClick() {
    setOpen(false)
  }


  if (open) {
    return (
      <div className={style.modal} >
        <div className={`${style.containerContent} modal-content`} ref={modalRef}>
          <button className={style.fecharModal} onClick={handleClick}>✕</button>
          <h3 className={style.contentTitle}><span className={style.spanTitle}>Webinar: </span>{titulo}</h3>

          <video className={style.video} controls>
            <source src={link} type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeos.
          </video>


          <p className={style.titleDescri}>Descrição</p>
          <p className={style.contentDescri}>{descricao}</p>
          <p className={style.titleDescri}>Downloads</p>
          <div className={style.containerDownload}>
            <img className={style.iconDownload} src="/img/Downloads/Spreadsheet.png" alt="" />
            <img className={style.iconDownload} src="/img/Downloads/Doc.png" alt="" />
            <img className={style.iconDownload} src="/img/Downloads/presentation.png" alt="" />

          </div>
        </div>
      </div>
    );
  }
};

export default Modal;