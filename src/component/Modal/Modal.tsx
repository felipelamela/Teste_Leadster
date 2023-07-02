import { useRef, useEffect } from 'react';

interface Modal {
  titulo: string,
  link: string,
  descricao: string,
  thumbnail: string
  open: boolean
  setOpen: Function
}





const Modal: React.FC<Modal> = ({ titulo, link, descricao, thumbnail, open, setOpen }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {

        console.log('Modal fechado');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="modal" ref={modalRef}>
      <div className="modal-content">
        <h1>Meu Modal</h1>
        <p>Conteúdo do modal...</p>
      </div>
    </div>
  );
};

export default Modal;