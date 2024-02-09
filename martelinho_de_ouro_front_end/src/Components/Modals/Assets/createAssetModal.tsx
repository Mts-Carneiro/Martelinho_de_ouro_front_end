import Modal from "react-modal";
import { StyledModalForm, StyledDivModal } from "../style";

const customStyles = {
  content: {
    top: "30%",
    left: "50%",
    transform: " translate(-50%, -100px)",
    width: "35%",
    height: "60%",
  },
};

let modal = true;

export const ModalCreateAsset = () => {
  return (
    <Modal isOpen={modal} style={customStyles}>
      <StyledDivModal>
        <h2>Crie uma nova entrada</h2>

        <StyledModalForm>
          <label>Valor</label>
          <input type="number" placeholder="R$100,00" />
          <span>Erro...</span>
          <label>Data</label>
          <input type="date" />
          <span>Erro...</span>
          <label>Nome</label>
          <input type="text" placeholder="Nome da entrada" />
          <span>Erro...</span>
          <label>Tipo</label>
          <input type="text" placeholder="Tipo da entrada" />
          <span>Erro...</span>
          <label>Observação</label>
          <input type="text" placeholder="" />
          <span>Erro...</span>
        </StyledModalForm>

        <div className="div_modal_button">
          <button>criar entrada</button>
          <button>Cancelar</button>
        </div>
      </StyledDivModal>
    </Modal>
  );
};
