import { useRef, useEffect } from 'react';
import style from "./Modal.module.css"

interface Modal {
  titulo: string,
  link: string,
  descricao: string,
  thumbnail: string
  open: boolean
  setOpen: Function
}

const Modal: React.FC<Modal> = ({ titulo, link, descricao, thumbnail, open, setOpen }) => {
  if (!open) {
    return null
  }

  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={style.modal} >
      <div className={`${style.containerContent} modal-content`} ref={modalRef}>
        <h3 className={style.contentTitle}><span className={style.spanTitle}>Webinar: </span>{titulo}</h3>
        <img src={thumbnail} alt="" />
        <p className={style.titleDescri}>Descrição</p>
        <p className={style.contentDescri}>{descricao}</p>
        <div>
          <img src="/img/Downloads/Spreadsheet.png" alt="" />
          <img src="/img/Downloads/Doc.png" alt="" />
          <img src="/img/Downloads/presentation.png" alt="" />

        </div>
      </div>
    </div>
  );
};

export default Modal;