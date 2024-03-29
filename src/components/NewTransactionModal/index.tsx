import Modal from 'react-modal';     
import VectorImg from '../../assets/vector.svg'
import { Container } from './style';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
     >
       
       <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
       >

         <img src={VectorImg} alt="fechar modal" />
       </button>

       <Container>
         <h2>Cadastrar transação</h2>

         <input
           placeholder="Titulo"
         />

         <input
           type="number"
           placeholder="Valor"
         />

         <input
           placeholder="Categoria"
         />

         <button type="submit">
           Cadastrar 
         </button>
         
       </Container>
        

     </Modal>
  );
}