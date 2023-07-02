import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  categoria: string,
  titulo: string,
  link: string,
  descricao: string,
  thumbnail: string
}


interface ApiResponse {

}


const Modal: React.FC<ModalProps> = ({ isOpen, onClose, titulo, thumbnail, categoria, link, descricao }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Fechar
        </button>

      </div>
    </div>
  );
};

export default Modal;
